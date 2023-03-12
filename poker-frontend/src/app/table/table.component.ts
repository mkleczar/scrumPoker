import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {PokerService} from "../poker.service";
import {Location} from "@angular/common";
import {TableDetails} from "../model/table-details";
import {User} from "../model/user";
import {TableStatus} from "../model/table-status";
import {MessageService} from "primeng/api";
import {UserTable} from "../interface/user-table";
import {Card} from "../interface/card";

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
  cards: Card[] =[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private messageService: MessageService,
    private pokerService: PokerService,
    private location: Location) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.userId = params["userId"];
      const tableId:number = params["tableId"];
      this.getUser(this.userId);
      this.getTable(tableId);
      this.getTableReact(tableId);
      this.getCards(tableId);
    })
  }

  getTable(tableId: number): void {
    this.pokerService.getTable(tableId, this.userId)
      .subscribe({
        next: t => this.table = t,
        error: e => this.messageService.add({severity:'error', summary:'Error', detail:e.error.message})
      });
  }

  getTableReact(tableId: number): void {
    this.pokerService.getTableReact(tableId)
      .subscribe({
        next: t => this.table = t,
        error: e => this.messageService.add({severity:'error', summary:'Error', detail:e.error.message})
      });
  }

  getUser(userId: number): void {
    this.pokerService.getUser(userId)
      .subscribe({
        next: u => this.user = u,
        error: e => this.messageService.add({severity:'error', summary:'Error', detail:e.error.message}),
      });
  }

  getCards(tableId: number) {
    this.pokerService.getCards(tableId).subscribe({
      next: stack => this.cards = stack,
      error: e => this.messageService.add({severity:'error', summary:'Error', detail:e.error.message}),
    });
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

  onStatusChange(status: TableStatus):void {
    this.pokerService.setStatus(this.table?.id, this.userId, status)
      .subscribe({
        next: value =>this.messageService.add({severity:'success', summary:'Success', detail:"State changed to " + status}),
        error: e => this.messageService.add({severity:'error', summary:'Error', detail:e.error.message})
      })
  }

  onVote(vote: number):void {
    this.pokerService.sendVote(this.table?.id, this.userId, vote)
      .subscribe({
        next: value =>this.messageService.add({severity:'success', summary:'Success', detail:"Your vote is important!"}),
        error: e => this.messageService.add({severity:'error', summary:'Error', detail:e.error.message})
      });
  }

  onVoteCancel(): void {
    this.pokerService.cancelVote(this.table?.id, this.userId)
      .subscribe({
        next: value =>this.messageService.add({severity:'success', summary:'Success', detail:"Your vote is canceled, try new vote"}),
        error: e => this.messageService.add({severity:'error', summary:'Error', detail:e.error.message})
      });
  }
}
