import {Component, Input} from '@angular/core';
import {TableDetails} from "../model/table-details";
import {PokerService} from "../poker.service";

@Component({
  selector: 'app-table-admin-panel',
  templateUrl: './table-admin-panel.component.html',
  styleUrls: ['./table-admin-panel.component.css']
})
export class TableAdminPanelComponent {

  @Input() table? : TableDetails;
  @Input() userId? : number;

  constructor(private pokerService:PokerService) {
  }

  setStatusVoting(): void {
    console.log("Voting")
    this.pokerService.setStatus(this.table?.id, this.userId, "VOTING")
      .subscribe()
  }

  setStatusReveal(): void {
    this.pokerService.setStatus(this.table?.id, this.userId, "REVIVING")
      .subscribe()
  }
}
