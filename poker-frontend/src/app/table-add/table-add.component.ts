import { Component } from '@angular/core';
import {PokerService} from "../poker.service";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-table-add',
  templateUrl: './table-add.component.html',
  styleUrls: ['./table-add.component.css']
})
export class TableAddComponent {

  constructor(private pokerService: PokerService,
              private messageService: MessageService) {
  }

  addTable(tableName: string) {
    this.pokerService.addTable(tableName)
      .subscribe({
        next: t => {},
        error: e => this.messageService.add({severity:'error', summary:'Error', detail:e.error.message}),
        complete: () => {}
      })
  }
}
