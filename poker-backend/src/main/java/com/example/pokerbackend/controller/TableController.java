package com.example.pokerbackend.controller;

import com.example.pokerapi.openapi.api.TableApi;
import com.example.pokerapi.openapi.model.TableDto;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collections;
import java.util.List;

@RestController
public class TableController implements TableApi {

    @Override
    public ResponseEntity<List<TableDto>> allTables() {
        return ResponseEntity.ok(Collections.emptyList());
    }
}
