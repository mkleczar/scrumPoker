import { Component } from '@angular/core';
import { Table } from "../model/table";
import { PokerService } from "../poker.service";
import { CardModule } from "primeng/card";

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent {

  tables: Table[] = [];

  ngOnInit(): void {
    this.getTables();
    this.getTablesReact();
  }

  constructor(private pokerService: PokerService) {
  }

  getTables(): void {
    this.pokerService.getTables()
      .subscribe(t => this.tables = t);
  }

  getTablesReact(): void {
    this.pokerService.getTablesReact()
      .subscribe({
        next: t => {
          //console.log(t)
          this.tables = t
        },
        error: err => console.log("Znaleziony błąd: " + err.error)
      })
  }
}
