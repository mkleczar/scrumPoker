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
import com.example.pokerbackend.mapper.PokerTableMapper;
import com.example.pokerbackend.mapper.PokerUserMapper;
import com.example.pokerbackend.repository.PokerTableRepository;
import com.example.pokerbackend.repository.PokerUserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

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
        PokerTable table = pokerTableRepository.findById(tableId)
                .orElseThrow(TableNotExistsException::new);
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

    public TableDetailsDto tableDetails(Long tableId, Long userId) {
        PokerTable table = pokerTableRepository.findById(tableId)
                .orElseThrow(TableNotExistsException::new);
        return pokerTableMapper.mapDetails(table);
    }

    public void setStatus(Long tableId, Long userId, String statusStr) {
        PokerTable table = pokerTableRepository.findById(tableId)
                .orElseThrow(TableNotExistsException::new);
        PokerUser user = table.getUsers().stream()
                .filter(u -> u.getId() == userId)
                .findAny()
                .orElseThrow(() -> new UserActionNotAllowed(String.format("User %d is not sitting on table %d", userId, tableId)));
       if (user.getRole() != TableRole.ADMIN) {
           throw new UserActionNotAllowed(String.format("User %d has role %s, but only ADMIN is allowed to change status", userId, user.getRole()));
       }
       table.setStatus(TableStatus.valueOf(statusStr));
       pokerTableRepository.save(table);
    }
}
