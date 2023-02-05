package com.example.pokerbackend.repository;

import com.example.pokerbackend.entity.PokerTable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PokerTableRepository extends JpaRepository<PokerTable, Long> {
}
