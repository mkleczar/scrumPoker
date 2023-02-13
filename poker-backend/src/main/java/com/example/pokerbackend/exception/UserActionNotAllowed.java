package com.example.pokerbackend.exception;

public class UserActionNotAllowed extends RuntimeException {
    public UserActionNotAllowed(String reason) {
        super("User action not allowed: " + reason);
    }

    public static UserActionNotAllowed of(String reason) {
        return new UserActionNotAllowed(reason);
    }

}
