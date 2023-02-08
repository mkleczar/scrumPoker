import { Component } from '@angular/core';
import { TABLES} from "../model/mock-tables";
import {Table} from "../model/table";

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent {

  tables = TABLES;

  joinTable(t:Table) {
  }
}
