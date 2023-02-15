import {Component, Input} from '@angular/core';
import {TableDetails} from "../model/table-details";
import {PokerService} from "../poker.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-table-voting-panel',
  templateUrl: './table-voting-panel.component.html',
  styleUrls: ['./table-voting-panel.component.css']
})
export class TableVotingPanelComponent {
  @Input() table?: TableDetails;
  cards: number[] = [1,2,3,5,8,13,21,34];
  selectedCard?: number;
  userId?: number;

  constructor(private pokerService: PokerService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.userId = Number(this.route.snapshot.paramMap.get("userId"));
  }

  vote(card?: number):void {
    console.log("vote: " + card)
    this.userId = Number(this.route.snapshot.paramMap.get("userId"));
    this.selectedCard = card;
    this.pokerService.sendVote(this.table?.id, this.userId, card)
      .subscribe();
  }
  cancel():void {
    console.log("vote canceled");
    this.selectedCard = 0;
    this.pokerService.cancelVote(this.table?.id, this.userId)
      .subscribe();
  }
}
