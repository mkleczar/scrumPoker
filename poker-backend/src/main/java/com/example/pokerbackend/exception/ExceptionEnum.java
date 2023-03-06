package com.example.pokerbackend.exception;

public enum ExceptionEnum {
    TABLE_NAME_DUPLICATED(99, "Table name already in use"),
    TABLE_NAME_EMPTY(100, "Table name can't be empty"),
    TABLE_NOT_EXISTS(101, "Table not exists"),
    TABLE_ROLE_NOT_EXIST(102, "Table role not exists"),
    TABLE_USERS_PRESENT(103, "Users are present on table, so table can't be deleted"),
    USER_NAME_DUPLICATED(200, "User name is duplicated"),
    USER_NAME_EMPTY(201, "User name is already taken"),
    USER_NOT_IN_TABLE(202, "User is not sitting on specified table");

    private final int code;
    private final String message;

    ExceptionEnum(int code, String message) {
        this.code = code;
        this.message = message;
    }

    public RuntimeException asException() {
        return new BasicException(message, code);
    }
}
