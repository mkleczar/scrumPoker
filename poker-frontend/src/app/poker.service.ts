import { Injectable } from '@angular/core';
import { Table } from "./model/table";
import { TABLES } from "./model/mock-tables";
import { Observable, of } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";

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

  getTable(id: number):Observable<Table> {
    const url = `${this.pokerUrl}/table/${id}`;
    return this.http.get<Table>(url);
  }
}
