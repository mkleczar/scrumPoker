package com.example.pokerbackend.exception;

public class TableNameDuplicatedException extends BasicException {


    public TableNameDuplicatedException() {
        super("Table name is duplicated", 1);
    }
}
