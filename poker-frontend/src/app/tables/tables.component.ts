import { Component } from '@angular/core';
import { Table } from "../model/table";
import { PokerService } from "../poker.service";

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent {

  tables: Table[] = [];

  ngOnInit(): void {
    this.getTables();
  }

  constructor(private pokerService: PokerService) {
  }

  getTables(): void {
    this.pokerService.getTables()
      .subscribe(t => this.tables = t);
  }
}
