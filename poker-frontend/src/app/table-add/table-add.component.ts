import { Component } from '@angular/core';
import {PokerService} from "../poker.service";

@Component({
  selector: 'app-table-add',
  templateUrl: './table-add.component.html',
  styleUrls: ['./table-add.component.css']
})
export class TableAddComponent {

  constructor(private pokerService: PokerService) {
  }

  addTable(tableName: string) {
    this.pokerService.addTable(tableName)
      .subscribe();
  }
}
