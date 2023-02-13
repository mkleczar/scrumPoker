import { Injectable } from '@angular/core';
import { Table } from "./model/table";
import { Observable, of } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { User } from "./model/user";
import {TableDetails} from "./model/table-details";

@Injectable({
  providedIn: 'root'
})
export class PokerService {

  private pokerUrl = 'http://localhost:8080';
  private httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient) { }

  getTables(): Observable<Table[]> {
    return this.http.get<Table[]>(this.pokerUrl + "/table");
  }

  addTable(name: string): Observable<Table> {
    const url = `${this.pokerUrl}/table`;
    const req = {name: name}
    return this.http.post<Table>(url, req, this.httpOptions);
  }

  joinToTable(table: Table, user: User): Observable<User> {
    const url = `${this.pokerUrl}/table/${table.id}/join`;
    return this.http.post<User>(url, user, this.httpOptions);
  }


  getTable(tableId: number, userId: number):Observable<TableDetails> {
    const url = `${this.pokerUrl}/table/${tableId}/user/${userId}/details`;
    return this.http.get<TableDetails>(url);
  }

  setStatus(tableId?: number, userId?: number, status?: string):Observable<void> {
    const url = `${this.pokerUrl}/table/${tableId}/user/${userId}/status/${status}`;
    return this.http.put<void>(url, "{}", this.httpOptions);
  }
}
