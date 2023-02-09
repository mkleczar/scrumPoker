import {Component, Input} from '@angular/core';
import {Table} from "../model/table";
import {ActivatedRoute} from "@angular/router";
import {PokerService} from "../poker.service";
import {Location} from "@angular/common";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {

  @Input() table?: Table;

  constructor(
    private route: ActivatedRoute,
    private pokerService: PokerService,
    private location: Location) {
  }

  ngOnInit(): void {
    this.getTable();
  }

  getTable(): void {
    const id = Number(this.route.snapshot.paramMap.get("id"));
    this.pokerService.getTable(id)
      .subscribe(t => this.table = t);
  }

}
