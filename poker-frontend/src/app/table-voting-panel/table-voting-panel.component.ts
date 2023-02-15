import {Component, Input} from '@angular/core';
import {TableDetails} from "../model/table-details";

@Component({
  selector: 'app-table-voting-panel',
  templateUrl: './table-voting-panel.component.html',
  styleUrls: ['./table-voting-panel.component.css']
})
export class TableVotingPanelComponent {
  @Input() table?: TableDetails;
  cards: number[] = [1,2,3,5,8,13,21,34];
  selectedCard?: number;

  vote(card?: number):void {
    console.log("vote: " + card)
    this.selectedCard = card;
  }
  cancel():void {
    console.log("vote canceled");
    this.selectedCard = 0;
  }
}
