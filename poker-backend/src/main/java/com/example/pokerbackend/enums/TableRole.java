package com.example.pokerbackend.enums;

import com.example.pokerbackend.exception.TableRoleNotExistsException;

public enum TableRole {
    ADMIN,
    PLAYER,
    SPECTATOR;

    public static TableRole value(String name) {
        try {
            return TableRole.valueOf(name);
        } catch (IllegalArgumentException ex) {
            throw new TableRoleNotExistsException();
        }
    }
}
