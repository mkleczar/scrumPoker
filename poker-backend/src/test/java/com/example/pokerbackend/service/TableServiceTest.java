package com.example.pokerbackend.service;

import com.example.pokerapi.openapi.model.TableDto;
import com.example.pokerbackend.entity.PokerTable;
import com.example.pokerbackend.mapper.PokerTableMapper;
import com.example.pokerbackend.repository.PokerTableRepository;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mapstruct.factory.Mappers;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Spy;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.boot.test.context.SpringBootTest;


import java.util.Collections;
import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
public class TableServiceTest {

    @Mock
    private PokerTableRepository pokerTableRepository;
    @Spy
    private PokerTableMapper pokerTableMapper = Mappers.getMapper(PokerTableMapper.class);
    @InjectMocks
    private TableService tableService;

    @Test
    public void listAllWithNonEmptyRepoListTest() {
        List<PokerTable> tables = List.of(
                PokerTable.builder().id(1L).name("Team Alfa").build(),
                PokerTable.builder().id(2L).name("Team Omega").build());
        when(pokerTableRepository.findAll()).thenReturn(tables);
        assertThat(tableService.allTables())
                .hasSize(2)
                .extracting(TableDto::getName).containsExactlyInAnyOrder("Team Alfa", "Team Omega");
    }

    @Test
    public void listAllWithEmptyRepoListTest() {
        List<PokerTable> tables = Collections.emptyList();
        when(pokerTableRepository.findAll()).thenReturn(tables);
        assertThat(tableService.allTables())
                .isNotNull()
                .hasSize(0);
    }
}
