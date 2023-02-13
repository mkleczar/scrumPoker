package com.example.pokerbackend.controller;

import com.example.pokerapi.openapi.api.TableApi;
import com.example.pokerapi.openapi.model.AddTableRequest;
import com.example.pokerapi.openapi.model.TableDetailsDto;
import com.example.pokerapi.openapi.model.TableDto;
import com.example.pokerapi.openapi.model.UserDto;
import com.example.pokerbackend.service.TableService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@Slf4j
@RestController
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:4200")
public class TableController implements TableApi {

    private final TableService tableService;

    @Override
    public ResponseEntity<List<TableDto>> allTables() {
        log.info("allTables()");
        return ResponseEntity.ok(tableService.allTables());
    }

    @Override
    public ResponseEntity<TableDto> addTable(AddTableRequest addTableRequest) {
        log.info("addTable()");
        return ResponseEntity.ok(tableService.addTable(addTableRequest));
    }

    @Override
    public ResponseEntity<TableDetailsDto> details(Long tableId, Long userId) {
        log.info("details()");
        return ResponseEntity.ok(tableService.tableDetails(tableId, userId));
    }

    @Override
    public ResponseEntity<UserDto> join(Long tableId, UserDto user) {
        log.info("join()");
        return ResponseEntity.ok(tableService.addUserToTable(tableId, user));
    }

    @Override
    public ResponseEntity<Void> setStatus(Long tableId, Long userId, String status) {
        log.info("setStatus()");
        tableService.setStatus(tableId, userId, status);
        return ResponseEntity.ok().build();
    }
}
