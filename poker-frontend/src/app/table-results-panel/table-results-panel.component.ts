import {Component, Input} from '@angular/core';
import {Table} from "../model/table";
import {TableDetails} from "../model/table-details";

@Component({
  selector: 'app-table-results-panel',
  templateUrl: './table-results-panel.component.html',
  styleUrls: ['./table-results-panel.component.css']
})
export class TableResultsPanelComponent {

  @Input() table?: TableDetails;
}
