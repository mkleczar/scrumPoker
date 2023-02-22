package com.example.pokerbackend.controller;

import com.example.pokerapi.openapi.api.TableApi;
import com.example.pokerapi.openapi.model.AddTableRequest;
import com.example.pokerapi.openapi.model.TableDetailsDto;
import com.example.pokerapi.openapi.model.TableDto;
import com.example.pokerapi.openapi.model.UserDto;
import com.example.pokerbackend.service.TableService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Sinks;

import java.util.List;

@Slf4j
@RestController
@RequiredArgsConstructor
@CrossOrigin(origins = {"http://localhost:4200"})
public class TableController implements TableApi {

    private final TableService tableService;

    private final Sinks.Many<List<TableDto>> tableListSink = Sinks.many().multicast().onBackpressureBuffer();

    @GetMapping(path = "/react/table", produces = MediaType.TEXT_EVENT_STREAM_VALUE)
    public Flux<List<TableDto>> allTablesReact() {
        return tableListSink.asFlux();
    }
    @Override
    public ResponseEntity<List<TableDto>> allTables() {
        log.info("allTables()");
        return ResponseEntity.ok(tableService.allTables());
    }

    @Override
    public ResponseEntity<TableDto> addTable(AddTableRequest addTableRequest) {
        log.info("addTable()");
        TableDto tableDto = tableService.addTable(addTableRequest);
        List<TableDto> tables = tableService.allTables();
        Sinks.EmitResult result = tableListSink.tryEmitNext(tables);
        log.info("Emit result: {}", result);
        return ResponseEntity.ok(tableDto);
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

    @Override
    public ResponseEntity<Void> vote(Long tableId, Long userId, Integer vote) {
        log.info("vote()");
        tableService.vote(tableId, userId, vote);
        return ResponseEntity.ok().build();
    }

    @Override
    public ResponseEntity<Void> voteCancel(Long tableId, Long userId) {
        log.info("voteCancel()");
        tableService.voteCancel(tableId, userId);
        return ResponseEntity.ok().build();
    }
}
