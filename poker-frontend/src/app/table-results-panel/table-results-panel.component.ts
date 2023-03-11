import {Component, Input, OnInit, Optional} from '@angular/core';
import {User} from "../model/user";

@Component({
  selector: 'app-table-results-panel',
  templateUrl: './table-results-panel.component.html',
  styleUrls: ['./table-results-panel.component.css']
})
export class TableResultsPanelComponent implements OnInit {

  basicData: any;
  basicOptions: any;
  @Input() users: User[] = [];

  average?: number;
  players?: number;
  min?: number;
  max?: number;
  isPerfect: boolean = false;


  ngOnInit() {
    this.stats();
  }

  stats() {
    let votedPlayersOnly: User[] = this.users
      .filter(u => u.role == 'PLAYER').filter(u => u.vote);

    this.average = this.calculateAverage(votedPlayersOnly);
    [this.min, this.max, this.isPerfect] = this.calculateMaxMin(votedPlayersOnly);

    if (this.min == this.average) {
      this.min = undefined;
    }
    if (this.max == this.average) {
      this.max = undefined;
    }
  }

  calculateAverage(players: User[]):number | undefined {
    let [a, b] = players
      .map(u => u.vote ?? 0)
      .reduce(([sum, count], current) => [sum + current, count+1], [0,0]);
    if (b == 0) {
      return undefined;
    }
    return a / b;
  }
  calculateMaxMin(players: User[]):[number | undefined, number | undefined, boolean] {
    let perfect: boolean = false;
    let MAX = 1000;
    let min: number | undefined = this.users
      .map(u => u.vote ?? MAX)
      .reduce((p,c) => {if (p < c) return p; else return c;});
    if (min == MAX) {
      min = undefined;
    }

    let MIN = -1;
    let max: number | undefined = this.users
      .map(u => u.vote ?? MIN)
      .reduce((p,c) =>  {if (p > c) return p; else return c;})
    if (max == MIN) {
      max = undefined;
    }

    if (max != undefined && min != undefined && max == min) {
      perfect = true;
      max = undefined;
      min = undefined;
    }

    return [min, max, perfect];
  }


  refresh():any {
    let labels: number[] = [1,2,3,5,8,13,21,34];
    let values: number[] = [0,0,0,0,0,0,0,0];
    this.users
      .map(u => u.vote)
      .map(u => labels.findIndex(x => x.valueOf() == u))
      .forEach(i => values[i]++);
    this.basicData =  {
      labels: labels,
      datasets: [
        {
          label: 'Votes',
          backgroundColor: '#42A5F5',
          data: values
        }
      ]
    };
  }


}
