package com.example.pokerbackend.exception;

public class TableNotExistsException extends BasicException {

    public TableNotExistsException() {
        super("Table does not exists", 2);
    }
}
