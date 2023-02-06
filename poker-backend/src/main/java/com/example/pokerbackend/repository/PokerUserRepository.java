package com.example.pokerbackend.repository;

import com.example.pokerbackend.entity.PokerUser;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PokerUserRepository extends JpaRepository<PokerUser, Long> {
}
