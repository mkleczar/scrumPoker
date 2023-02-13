package com.example.pokerbackend.entity;

import com.example.pokerbackend.enums.TableStatus;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Entity
@Table(name = "POKER_TABLE")
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class PokerTable {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    private String name;

    @Enumerated(EnumType.STRING)
    private TableStatus status;

    @OneToMany(mappedBy = "table")
    private List<PokerUser> users;
}
