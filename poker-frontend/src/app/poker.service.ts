import { Injectable } from '@angular/core';
import {Table} from "./model/table";
import {TABLES} from "./model/mock-tables";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PokerService {

  constructor() { }

  getTables(): Observable<Table[]> {
    return of(TABLES);
  }

  getTable(id: number):Observable<Table> {
    const table = TABLES.find(t => t.id===id)!;
    return of(table);
  }
}
