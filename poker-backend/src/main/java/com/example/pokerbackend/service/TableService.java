package com.example.pokerbackend.service;

import com.example.pokerapi.openapi.model.TableDto;
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
}
