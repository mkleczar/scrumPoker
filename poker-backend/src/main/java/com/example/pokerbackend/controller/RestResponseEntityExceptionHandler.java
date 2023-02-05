package com.example.pokerbackend.controller;

import com.example.pokerapi.openapi.model.Error;
import com.example.pokerbackend.exception.TableNameDuplicatedException;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

@ControllerAdvice
public class RestResponseEntityExceptionHandler extends ResponseEntityExceptionHandler {

    @ExceptionHandler({TableNameDuplicatedException.class})
    protected ResponseEntity<Object> tableNameDuplication(RuntimeException ex, WebRequest request) {
        Error body = new Error().code(1).message("Table name duplicated");
        return handleExceptionInternal(ex, body, new HttpHeaders(), HttpStatus.FORBIDDEN, request);
    }
}
