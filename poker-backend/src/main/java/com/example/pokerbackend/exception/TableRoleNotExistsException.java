package com.example.pokerbackend.exception;

public class TableRoleNotExistsException extends BasicException {
    public TableRoleNotExistsException() {
        super("Table role does not exists", 3);
    }
}
