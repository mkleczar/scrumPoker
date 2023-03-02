import {Component, Input} from '@angular/core';
import {TableDetails} from "../model/table-details";
import {PokerService} from "../poker.service";

@Component({
  selector: 'app-table-admin-panel',
  template: `
    <p-card header="Admin panel" [style]="{'margin':'0.5em', 'min-width':'25rem'}">

      <div *ngIf="tableStatus == 'READY' || tableStatus == 'REVIVING'">
        <button type="button" class="text-white bg-primary-500 border-primary-500 px-3 py-2 text-base border-1 border-solid border-round cursor-pointer transition-all transition-duration-200 hover:bg-primary-600 hover:border-primary-600 active:bg-primary-700 active:border-primary-700"
                (click)="setStatusVoting()">Start voting</button>
      </div>

      <div *ngIf="tableStatus == 'VOTING'">
        <button type="button" class="text-white bg-primary-500 border-primary-500 px-3 py-2 text-base border-1 border-solid border-round cursor-pointer transition-all transition-duration-200 hover:bg-primary-600 hover:border-primary-600 active:bg-primary-700 active:border-primary-700"
                (click)="setStatusReveal()">Reveal results</button>
      </div>
    </p-card>
  `,
  styles: []
})
export class TableAdminPanelComponent {

  @Input() userId? : number;
  @Input() tableId? : number;
  @Input() tableStatus? : string

  constructor(private pokerService:PokerService) {
  }

  setStatusVoting(): void {
    console.log("Voting")
    this.pokerService.setStatus(this.tableId, this.userId, "VOTING")
      .subscribe()
  }

  setStatusReveal(): void {
    this.pokerService.setStatus(this.tableId, this.userId, "REVIVING")
      .subscribe()
  }
}
