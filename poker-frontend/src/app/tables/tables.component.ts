import {Component, OnInit} from '@angular/core';
import {Table} from "../model/table";
import {PokerService} from "../poker.service";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit{

  tables: Table[] = [];

  ngOnInit(): void {
    this.getTables();
    this.getTablesReact();
  }

  constructor(private pokerService: PokerService,
                private messagesService: MessageService) {
  }

  getTables(): void {
    this.pokerService.getTables()
      .subscribe({
        next: t => this.tables = t,
        error: e => console.log(e),
        complete: () => {}
      })
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

  removeTable(tableId: number):void {
    this.pokerService.removeTable(tableId)
      .subscribe({
        next: t => this.tables = t,
        error: e => this.messagesService.add({severity:'error', summary:'Error', detail:e.error.message})
      })
  }
}
