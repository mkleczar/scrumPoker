package com.example.pokerbackend.controller;

import com.example.pokerapi.openapi.api.TableApi;
import com.example.pokerapi.openapi.model.AddTableRequest;
import com.example.pokerapi.openapi.model.TableDto;
import com.example.pokerbackend.service.TableService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class TableController implements TableApi {

    private final TableService tableService;

    @Override
    public ResponseEntity<List<TableDto>> allTables() {
        return ResponseEntity.ok(tableService.allTables());
    }

    @Override
    public ResponseEntity<TableDto> addTable(AddTableRequest addTableRequest) {
        return ResponseEntity.ok(tableService.addTable(addTableRequest));
    }
}
