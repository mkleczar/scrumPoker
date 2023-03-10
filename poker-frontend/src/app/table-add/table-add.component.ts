import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-table-add',
  template: `
    <p-card header="Create new table" [style]="{'margin':'1em'}">
      <div class="field">
        <label for="add-table-name">Table name:</label>
        <input id="add-table-name" #addTableName type="text" class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full">
      </div>
      <button type="button" class="text-white bg-primary-500 border-primary-500 px-3 py-2 text-base border-1 border-solid border-round cursor-pointer transition-all transition-duration-200 hover:bg-primary-600 hover:border-primary-600 active:bg-primary-700 active:border-primary-700"
              (click)="addTable(addTableName.value); addTableName.value=''">Add table</button>
    </p-card>
  `,
  styleUrls: ['./table-add.component.css']
})
export class TableAddComponent {

  @Output() tableAddEmiter: EventEmitter<string> = new EventEmitter<string>();

  addTable(tableName: string) {
    this.tableAddEmiter.emit(tableName);
  }
}
