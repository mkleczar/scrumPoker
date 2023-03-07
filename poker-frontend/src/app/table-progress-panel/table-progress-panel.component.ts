import {Component, Input} from '@angular/core';
import {TableDetails} from "../model/table-details";
import {UserRole} from "../model/user-role";

@Component({
  selector: 'app-table-progress-panel',
  templateUrl: './table-progress-panel.component.html',
  styleUrls: ['./table-progress-panel.component.css']
})
export class TableProgressPanelComponent {

  @Input() table?: TableDetails;

  notAllVotes(table: TableDetails): boolean {
    return table.users
      .filter(u => u.role == UserRole.PLAYER)
      .map(u => (u.vote ?? -1) > 0)
      .reduce((p, c) => p && !c, true)
  }
}
