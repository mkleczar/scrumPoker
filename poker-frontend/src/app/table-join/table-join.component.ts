import {Component, OnInit} from '@angular/core';
import { PokerService } from "../poker.service";
import {ActivatedRoute, Router} from "@angular/router";
import {UserRole} from "../model/user-role";
import {MessageService} from "primeng/api";

interface Role {
  name: string,
  code: string
}

@Component({
  selector: 'app-table-join',
  templateUrl: './table-join.component.html',
  styleUrls: ['./table-join.component.css']
})
export class TableJoinComponent implements OnInit {
  UserRoleType = UserRole;

  ROLES: Role[] = [
    {name: 'Admin', code: this.UserRoleType.ADMIN},
    {name: 'Player', code: this.UserRoleType.PLAYER},
    {name: 'Spectator', code:this.UserRoleType.SPECTATOR}];
  selectedRole?: string;

  tableId?: number;
  tableName?: string | null;

  constructor(
    private messageService: MessageService,
    private pokerService: PokerService,
    private route: ActivatedRoute,
    private router: Router) {
  }


  ngOnInit(): void {
    this.route.params.subscribe(params => {
        console.log("Params:", params);
        this.tableId = params["id"];
        this.tableName = params["name"];
    })
  }

  joinTable(userName: string, userRole: UserRole) {
    this.pokerService.joinToTable({id: this.tableId, name: ''}, {id: 0, nick: userName, role: userRole})
      .subscribe({
        next: u => this.router.navigateByUrl(`/table/${this.tableId}/user/${u.id}`),
        error: e => this.messageService.add({severity:'error', summary:'Error', detail:e.error.message})
      });
  }
}
