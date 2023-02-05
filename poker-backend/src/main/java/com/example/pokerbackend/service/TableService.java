package com.example.pokerbackend.service;

import com.example.pokerapi.openapi.model.AddTableRequest;
import com.example.pokerapi.openapi.model.TableDto;
import com.example.pokerbackend.entity.PokerTable;
import com.example.pokerbackend.mapper.PokerTableMapper;
import com.example.pokerbackend.repository.PokerTableRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class TableService {

    public final PokerTableRepository pokerTableRepository;
    public final PokerTableMapper pokerTableMapper;

    public List<TableDto> allTables() {
        return pokerTableMapper.map(
                pokerTableRepository.findAll());
    }

    public TableDto addTable(AddTableRequest request) {
        return pokerTableMapper.map(
                pokerTableRepository.save(
                        PokerTable.builder().name(request.getName()).build()));
    }
}
