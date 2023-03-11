import {Component, Input} from '@angular/core';
import {TableDetails} from "../model/table-details";
import {PokerService} from "../poker.service";
import {ActivatedRoute} from "@angular/router";
import {MessageService} from "primeng/api";


interface Card {
  name: string,
  code: number
}

@Component({
  selector: 'app-table-voting-panel',
  templateUrl: './table-voting-panel.component.html',
  styleUrls: ['./table-voting-panel.component.css']
})
export class TableVotingPanelComponent {
  @Input() table?: TableDetails;
  cards: Card[] = []

  selectedCard?: number;
  userId?: number;

  constructor(private pokerService: PokerService,
              private messagesService: MessageService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.userId = Number(this.route.snapshot.paramMap.get("userId"));
    this.cards = this.pokerService.getCards(this.table?.id ?? 0);
  }

  vote(card?: number):void {
    console.log("vote: " + card)
    this.userId = Number(this.route.snapshot.paramMap.get("userId"));
    this.selectedCard = card;
    this.pokerService.sendVote(this.table?.id, this.userId, card)
      .subscribe({
        next: value =>this.messagesService.add({severity:'success', summary:'Success', detail:"Your vote is important!"}),
        error: e => this.messagesService.add({severity:'error', summary:'Error', detail:e.error.message})
      });
  }
  cancel():void {
    console.log("vote canceled");
    this.selectedCard = 0;
    this.pokerService.cancelVote(this.table?.id, this.userId)
      .subscribe({
        next: value =>this.messagesService.add({severity:'success', summary:'Success', detail:"Your vote is canceled, try new vote"}),
        error: e => this.messagesService.add({severity:'error', summary:'Error', detail:e.error.message})
      });
  }
}
