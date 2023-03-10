import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {PokerService} from "../poker.service";
import {Location} from "@angular/common";
import {TableDetails} from "../model/table-details";
import {User} from "../model/user";
import {TableStatus} from "../model/table-status";
import {MessageService} from "primeng/api";
import {UserTable} from "../interface/user-table";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  TableStatusType = TableStatus;

  table?: TableDetails;
  userId : number = -1;
  user?: User;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private messageService: MessageService,
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

  onUserRemove(data: UserTable) {
    this.pokerService.removeUser(data.tableId, data.userId)
      .subscribe({
        next: () => {
          this.messageService.add({severity:'success', summary:'Success', detail:"User removed from table"});
          return this.router.navigateByUrl(`/tables`)
        },
        error: e => this.messageService.add({severity:'error', summary:'Error', detail:e.error.message}),
      });
  }
}
