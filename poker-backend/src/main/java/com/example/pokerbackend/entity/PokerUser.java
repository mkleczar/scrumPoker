package com.example.pokerbackend.entity;

import com.example.pokerbackend.enums.TableRole;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "POKER_USER")
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class PokerUser {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    private String nick;

    @Enumerated(EnumType.STRING)
    private TableRole role;

    private Integer vote;

    @ManyToOne
    @JoinColumn(name = "table_id", nullable = false)
    private PokerTable table;
}
