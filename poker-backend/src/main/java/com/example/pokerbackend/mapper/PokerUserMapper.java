package com.example.pokerbackend.mapper;

import com.example.pokerapi.openapi.model.UserDto;
import com.example.pokerbackend.entity.PokerUser;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface PokerUserMapper {
    UserDto map(PokerUser user);
    List<UserDto> map(List<PokerUser> user);
}
