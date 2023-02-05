package com.example.pokerbackend.repository;

import com.example.pokerbackend.entity.PokerTable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PokerTableRepository extends JpaRepository<PokerTable, Long> {

    List<PokerTable> findPokerTableByName(String name);
}
