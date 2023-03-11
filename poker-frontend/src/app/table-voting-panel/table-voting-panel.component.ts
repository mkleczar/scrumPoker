import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Card} from "../interface/card";

@Component({
  selector: 'app-table-voting-panel',
  template: `
    <p-card header="Voting panel" [style]="{'margin':'1em'}">

      <p-selectButton [options]="cards" [(ngModel)]="selectedCard"
                      optionLabel="name" optionValue="code" (onChange)="vote(selectedCard)"></p-selectButton>

      <ng-template pTemplate="footer">
        <button type="button" class="text-white bg-primary-500 border-primary-500 px-3 py-2 text-base border-1 border-solid border-round cursor-pointer transition-all transition-duration-200 hover:bg-primary-600 hover:border-primary-600 active:bg-primary-700 active:border-primary-700"
                (click)="cancel()">Cancel vote!</button>
      </ng-template>

    </p-card>
  `,
  styleUrls: ['./table-voting-panel.component.css']
})
export class TableVotingPanelComponent {
  @Input() cards: Card[] = [];
  @Output() voteEmiter: EventEmitter<number> = new EventEmitter<number>();
  @Output() cancelVoteEmiter: EventEmitter<void> = new EventEmitter<void>();

  selectedCard?: number;

  vote(card?: number):void {
    console.log("vote: " + card)
    this.selectedCard = card;
    this.voteEmiter.emit(card);
  }
  cancel():void {
    console.log("vote canceled");
    this.selectedCard = 0;
    this.cancelVoteEmiter.emit();
  }
}
