import {Component, Input} from '@angular/core';
import {TableDetails} from "../model/table-details";

@Component({
  selector: 'app-table-progress-panel',
  templateUrl: './table-progress-panel.component.html',
  styleUrls: ['./table-progress-panel.component.css']
})
export class TableProgressPanelComponent {

  @Input() table?: TableDetails;
}
