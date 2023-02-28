import {Component, Input} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PokerService} from "../poker.service";
import {Location} from "@angular/common";
import {TableDetails} from "../model/table-details";
import {User} from "../model/user";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {

  table?: TableDetails;
  userId : number = -1;
  user?: User;

  constructor(
    private route: ActivatedRoute,
    private pokerService: PokerService,
    private location: Location) {
  }

  ngOnInit(): void {
    this.userId = Number(this.route.snapshot.paramMap.get("userId"));
    this.getUser(this.userId);
    this.getTable();
    this.getTableReact();
  }

  getTable(): void {
    const tableId = Number(this.route.snapshot.paramMap.get("tableId"));
    this.pokerService.getTable(tableId, this.userId)
      .subscribe(t => this.table = t);
  }

  getTableReact(): void {
    const tableId = Number(this.route.snapshot.paramMap.get("tableId"));
    this.pokerService.getTableReact(tableId)
      .subscribe({
        next: t => {
          console.log(t);
          this.table = t;
        },
        error: err => console.log("Znaleziony błąd: " + err.error)
      });
  }

  getUser(userId: number): void {
    this.pokerService.getUser(userId)
      .subscribe(u => this.user = u);
  }
}
