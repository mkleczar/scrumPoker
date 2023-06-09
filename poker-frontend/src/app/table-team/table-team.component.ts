import {Component, EventEmitter, Input, Output} from '@angular/core';
import {TableDetails} from "../model/table-details";
import {User} from "../model/user";
import {UserTable} from "../interface/user-table";

@Component({
  selector: 'app-table-team',
  template: `
    <p-card header="Players" [style]="{'margin':'0.5em'}">
      <p-table [value]="table.users" [tableStyle]="{'min-width': '25rem'}">
        <ng-template pTemplate="header">
          <tr>
            <th>Nick</th>
            <th>Role</th>
            <th>Command</th>
          </tr>
        </ng-template>
        <ng-template pTemplate="body" let-aUser>
          <tr [ngClass]="{'font-bold':aUser.id == user?.id}">
            <td>{{aUser.nick}}</td>
            <td>{{aUser.role}}</td>
            <td>
              <button *ngIf="aUser.id == user?.id"
                pButton pRipple icon="pi pi-times" class="p-button-rounded p-button-danger" (click)="removeUser(aUser.id)"></button>
            </td>
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
  @Output() userRemoveEmiter: EventEmitter<UserTable> = new EventEmitter<UserTable>();

  removeUser(userId: number) {
    this.userRemoveEmiter.emit({tableId: this.table.id, userId: userId})
  }
}
