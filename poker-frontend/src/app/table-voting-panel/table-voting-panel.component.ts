import {Component, Input} from '@angular/core';
import {TableDetails} from "../model/table-details";

@Component({
  selector: 'app-table-voting-panel',
  templateUrl: './table-voting-panel.component.html',
  styleUrls: ['./table-voting-panel.component.css']
})
export class TableVotingPanelComponent {
  @Input() table?: TableDetails;
}
