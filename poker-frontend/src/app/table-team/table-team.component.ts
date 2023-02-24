import {Component, Input} from '@angular/core';
import {TableDetails} from "../model/table-details";
import {User} from "../model/user";

@Component({
  selector: 'app-table-team',
  template: `
    <p-card header="Players" [style]="{'margin':'0.5em'}">
      <p-table [value]="table.users" [tableStyle]="{'min-width': '25rem'}">
        <ng-template pTemplate="header">
          <tr>
            <th>Nick</th>
            <th>Role</th>
          </tr>
        </ng-template>
        <ng-template pTemplate="body" let-aUser>
          <tr [ngClass]="{'font-bold':aUser.id == user?.id}">
            <td>{{aUser.nick}}</td>
            <td>{{aUser.role}}</td>
          </tr>
        </ng-template>
      </p-table>
    </p-card>
  `,
  styles: [
  ]
})
export class TableTeamComponent {

  @Input() table!: TableDetails;
  @Input() user?: User;
}
