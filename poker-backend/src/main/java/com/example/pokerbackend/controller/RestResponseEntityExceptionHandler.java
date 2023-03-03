package com.example.pokerbackend.controller;

import com.example.pokerapi.openapi.model.Error;
import com.example.pokerbackend.exception.BasicException;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

@ControllerAdvice
public class RestResponseEntityExceptionHandler extends ResponseEntityExceptionHandler {

    @ExceptionHandler({BasicException.class})
    protected ResponseEntity<Object> tableNameDuplication(BasicException ex, WebRequest request) {
        Error body = new Error().code(ex.getCode()).message(ex.getInfo());
        return handleExceptionInternal(ex, body, new HttpHeaders(), HttpStatus.INTERNAL_SERVER_ERROR, request);
    }
}
