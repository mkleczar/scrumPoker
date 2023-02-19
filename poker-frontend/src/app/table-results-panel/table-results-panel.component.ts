import {Component, Input} from '@angular/core';
import {Table} from "../model/table";
import {TableDetails} from "../model/table-details";

@Component({
  selector: 'app-table-results-panel',
  templateUrl: './table-results-panel.component.html',
  styleUrls: ['./table-results-panel.component.css']
})
export class TableResultsPanelComponent {

  basicData: any;
  basicOptions: any;
  @Input() table?: TableDetails;



  ngOnInit() {

  }

  refresh():any {
    let labels: number[] = [1,2,3,5,8,13,21,34];
    let values: number[] = [0,0,0,0,0,0,0,0];
    this.table?.users
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
