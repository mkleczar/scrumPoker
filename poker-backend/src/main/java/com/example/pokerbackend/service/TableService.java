package com.example.pokerbackend.service;

import com.example.pokerapi.openapi.model.AddTableRequest;
import com.example.pokerapi.openapi.model.TableDetailsDto;
import com.example.pokerapi.openapi.model.TableDto;
import com.example.pokerapi.openapi.model.UserDto;
import com.example.pokerbackend.entity.PokerTable;
import com.example.pokerbackend.entity.PokerUser;
import com.example.pokerbackend.enums.TableRole;
import com.example.pokerbackend.enums.TableStatus;
import com.example.pokerbackend.exception.TableNameDuplicatedException;
import com.example.pokerbackend.exception.TableNotExistsException;
import com.example.pokerbackend.exception.UserActionNotAllowed;
import com.example.pokerbackend.exception.UserNotFoundException;
import com.example.pokerbackend.mapper.PokerTableMapper;
import com.example.pokerbackend.mapper.PokerUserMapper;
import com.example.pokerbackend.repository.PokerTableRepository;
import com.example.pokerbackend.repository.PokerUserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.function.Consumer;
import java.util.function.Predicate;

@Service
@RequiredArgsConstructor
public class TableService {

    private final PokerTableRepository pokerTableRepository;
    private final PokerUserRepository userRepository;
    private final PokerTableMapper pokerTableMapper;
    private final PokerUserMapper userMapper;

    public List<TableDto> allTables() {
        return pokerTableMapper.map(
                pokerTableRepository.findAll());
    }

    public TableDto addTable(AddTableRequest request) {
        if (pokerTableRepository.findPokerTableByName(request.getName()).size() > 0) {
            throw new TableNameDuplicatedException();
        }
        return pokerTableMapper.map(
                pokerTableRepository.save(
                        PokerTable.builder()
                                .name(request.getName())
                                .status(TableStatus.READY)
                                .build()));
    }

    public UserDto addUserToTable(Long tableId, UserDto request) {
        PokerTable table = findTable(tableId);
        TableRole role = TableRole.value(request.getRole());
        PokerUser user = PokerUser.builder()
                .nick(request.getNick())
                .table(table)
                .role(role)
                .build();
        user = userRepository.save(user);
        table.getUsers().add(user);
        pokerTableRepository.save(table);
        return userMapper.map(user);
    }

    public UserDto getUser(Long userId) {
        return userRepository.findById(userId)
                .map(userMapper::map)
                .orElseThrow(UserNotFoundException::new);
    }

    public TableDetailsDto tableDetails(Long tableId, Long userId) {
        PokerTable table = findTable(tableId);
        return pokerTableMapper.mapDetails(table);
    }

    public void setStatus(Long tableId, Long userId, String statusStr) {
        PokerTable table = findTable(tableId);
        PokerUser user = findTableUser(table, userId);
        userHasRole(TableRole.ADMIN).accept(user);

        TableStatus newStatus = TableStatus.valueOf(statusStr);
        table.setStatus(newStatus);
        if (newStatus == TableStatus.VOTING) {
            cleanVotes(table);
        }
        pokerTableRepository.save(table);
    }

    public void vote(Long tableId, Long userId, Integer vote) {
        PokerTable table = findTable(tableId);
        PokerUser user = findTableUser(table, userId);
        userHasRole(TableRole.PLAYER).accept(user);

        user.setVote(vote);
        userRepository.save(user);
    }

    public void voteCancel(Long tableId, Long userId) {
        PokerTable table = findTable(tableId);
        PokerUser user = findTableUser(table, userId);
        userHasRole(TableRole.PLAYER).accept(user);

        user.setVote(null);
        userRepository.save(user);
    }

    private void cleanVotes(PokerTable table) {
        table.getUsers().forEach(u -> u.setVote(null));
    }

    private PokerTable findTable(Long tableId) {
        return pokerTableRepository.findById(tableId)
                .orElseThrow(TableNotExistsException::new);
    }

    private PokerUser findTableUser(PokerTable table, Long userId) {
        return table.getUsers().stream()
                .filter(u -> u.getId() == userId)
                .findAny()
                .orElseThrow(() -> new UserActionNotAllowed(String.format("User %d is not sitting on table %d", userId, table.getId())));
    }

    private Consumer<PokerUser> userHasRole(TableRole role) {
        return user -> {
            if (role != user.getRole()) {
                throw new UserActionNotAllowed(String.format("User %d has role %s, but only ADMIN is allowed to change status", user.getId(), user.getRole()));
            }
        };
    }
}
