package com.example.pokerbackend.mapper;

import com.example.pokerapi.openapi.model.TableDto;
import com.example.pokerbackend.entity.PokerTable;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface PokerTableMapper {

    TableDto map(PokerTable table);
    List<TableDto> map(List<PokerTable> list);
}
