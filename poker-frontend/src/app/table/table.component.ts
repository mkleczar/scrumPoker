import {Component, Input} from '@angular/core';
import {Table} from "../model/table";
import {ActivatedRoute} from "@angular/router";
import {PokerService} from "../poker.service";
import {Location} from "@angular/common";
import {TableDetails} from "../model/table-details";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {

  table?: TableDetails;

  constructor(
    private route: ActivatedRoute,
    private pokerService: PokerService,
    private location: Location) {
  }

  ngOnInit(): void {
    this.getTable();
  }

  getTable(): void {
    const tableId = Number(this.route.snapshot.paramMap.get("tableId"));
    const userId = Number(this.route.snapshot.paramMap.get("userId"));
    this.pokerService.getTable(tableId, userId)
      .subscribe(t => this.table = t);
  }

}
