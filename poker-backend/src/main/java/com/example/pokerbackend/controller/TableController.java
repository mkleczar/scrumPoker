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
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Sinks;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Slf4j
@RestController
@RequiredArgsConstructor
@CrossOrigin(origins = {"http://localhost:4200"})
public class TableController implements TableApi {

    private final TableService tableService;

    private final Sinks.Many<List<TableDto>> tableListSink = Sinks.many().multicast().onBackpressureBuffer();
    private final Sinks.Many<TableDetailsDto> tableDetailsSink = Sinks.many().multicast().onBackpressureBuffer();
    private final Map<Long, Sinks.Many<TableDetailsDto>> tableDetailsSinkMap = new HashMap<>();

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

    @GetMapping(path = "/react/table/{tableId}/details", produces = MediaType.TEXT_EVENT_STREAM_VALUE)
    public Flux<TableDetailsDto> detailsReact(@PathVariable Long tableId) {
        return tableDetailsSinkMap
                .computeIfAbsent(tableId, id -> Sinks.many().multicast().onBackpressureBuffer())
                .asFlux();
    }

    @Override
    public ResponseEntity<UserDto> join(Long tableId, UserDto user) {
        log.info("join()");
        UserDto result = tableService.addUserToTable(tableId, user);
        emitTableDetails(tableId, result.getId());
        return ResponseEntity.ok(result);
    }

    @Override
    public ResponseEntity<Void> setStatus(Long tableId, Long userId, String status) {
        log.info("setStatus()");
        tableService.setStatus(tableId, userId, status);
        emitTableDetails(tableId, userId);
        return ResponseEntity.ok().build();
    }

    @Override
    public ResponseEntity<Void> vote(Long tableId, Long userId, Integer vote) {
        log.info("vote()");
        tableService.vote(tableId, userId, vote);
        emitTableDetails(tableId, userId);
        return ResponseEntity.ok().build();
    }

    @Override
    public ResponseEntity<Void> voteCancel(Long tableId, Long userId) {
        log.info("voteCancel()");
        tableService.voteCancel(tableId, userId);
        emitTableDetails(tableId, userId);
        return ResponseEntity.ok().build();
    }

    @Override
    public ResponseEntity<UserDto> user(Long userId) {
       log.info("user()");
       return ResponseEntity.ok(tableService.getUser(userId));
    }

    private void emitTableDetails(Long tableId, Long userId) {
        if(tableDetailsSinkMap.containsKey(tableId)) {
            TableDetailsDto tableDetailsDto = tableService.tableDetails(tableId, userId);
            Sinks.EmitResult emitResult = tableDetailsSinkMap.get(tableId).tryEmitNext(tableDetailsDto);
            log.info("Emituje: {} ze skutkiem: {}", tableDetailsDto, emitResult);
        }
    }
}
