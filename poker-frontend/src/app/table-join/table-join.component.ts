import { Component } from '@angular/core';
import { PokerService } from "../poker.service";
import {ActivatedRoute, Router} from "@angular/router";
import {UserRole} from "../model/user-role";

interface Role {
  name: string,
  code: string
}

@Component({
  selector: 'app-table-join',
  templateUrl: './table-join.component.html',
  styleUrls: ['./table-join.component.css']
})
export class TableJoinComponent {
  UserRoleType = UserRole;

  ROLES: Role[] = [
    {name: 'Admin', code: this.UserRoleType.ADMIN},
    {name: 'Player', code: this.UserRoleType.PLAYER},
    {name: 'Spectator', code:this.UserRoleType.SPECTATOR}];
  selectedRole?: string;

  tableId?: number;
  tableName?: string | null;

  constructor(
    private pokerService: PokerService,
    private route: ActivatedRoute,
    private router: Router) {
  }


  ngOnInit(): void {
    this.tableId = Number(this.route.snapshot.paramMap.get("id"));
    this.tableName = this.route.snapshot.paramMap.get("name");
  }

  joinTable(userName: string, userRole: UserRole) {
    this.pokerService.joinToTable({id: this.tableId, name: ''}, {id: 0, nick: userName, role: userRole})
      .subscribe(u => this.router.navigateByUrl(`/table/${this.tableId}/user/${u.id}`));
  }
}
