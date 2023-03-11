import {Component, EventEmitter, Output} from '@angular/core';
import {TableStatus} from "../model/table-status";

@Component({
  selector: 'app-table-admin-panel',
  template: `
    <p-card header="Admin panel" [style]="{'margin':'0.5em', 'min-width':'25rem'}">

      <div *ngIf="tableStatus == TableStatusType.READY || tableStatus == TableStatusType.REVIVING">
        <button type="button" class="text-white bg-primary-500 border-primary-500 px-3 py-2 text-base border-1 border-solid border-round cursor-pointer transition-all transition-duration-200 hover:bg-primary-600 hover:border-primary-600 active:bg-primary-700 active:border-primary-700"
                (click)="setStatusVoting()">Start voting</button>
      </div>

      <div *ngIf="tableStatus == TableStatusType.VOTING">
        <button type="button" class="text-white bg-primary-500 border-primary-500 px-3 py-2 text-base border-1 border-solid border-round cursor-pointer transition-all transition-duration-200 hover:bg-primary-600 hover:border-primary-600 active:bg-primary-700 active:border-primary-700"
                (click)="setStatusReveal()">Reveal results</button>
      </div>
    </p-card>
  `,
  styles: []
})
export class TableAdminPanelComponent {

  TableStatusType = TableStatus;
  tableStatus = TableStatus.READY;
  @Output() adminCommandEmiter: EventEmitter<TableStatus> = new EventEmitter<TableStatus>();


  setStatusVoting(): void {
    this.tableStatus = TableStatus.VOTING;
    this.adminCommandEmiter.emit(TableStatus.VOTING)
  }

  setStatusReveal(): void {
    this.tableStatus = TableStatus.REVIVING;
    this.adminCommandEmiter.emit(TableStatus.REVIVING);
  }
}
