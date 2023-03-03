package com.example.pokerbackend.exception;

public class UserActionException extends RuntimeException {
    public UserActionException(String reason) {
        super("User action not allowed: " + reason);
    }

    public static UserActionException of(String reason) {
        return new UserActionException(reason);
    }

}
