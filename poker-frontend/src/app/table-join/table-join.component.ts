import { Component } from '@angular/core';
import { PokerService } from "../poker.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-table-join',
  templateUrl: './table-join.component.html',
  styleUrls: ['./table-join.component.css']
})
export class TableJoinComponent {

  constructor(
    private pokerService: PokerService,
    private route: ActivatedRoute,
    private router: Router) {
  }

  joinTable(userName: string, userRole: string) {
    const tableId = Number(this.route.snapshot.paramMap.get("id"));
    this.pokerService.joinToTable({id: tableId, name: ''}, {id: 0, nick: userName, role: userRole})
      .subscribe(u => this.router.navigateByUrl(`/table/${tableId}/user/${u.id}`));
  }
}
