import { Injectable } from '@angular/core';
import { Table } from "./model/table";
import { Observable, of } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { User } from "./model/user";
import {TableDetails} from "./model/table-details";
import {SseService} from "./sse.service";
import {environment} from "../environments/environment";
import {Card} from "./interface/card";

@Injectable({
  providedIn: 'root'
})
export class PokerService {

  private pokerUrl = environment.backendUrl;
  private httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient,
              private sse: SseService) { }

  getTables(): Observable<Table[]> {
    return this.http.get<Table[]>(this.pokerUrl + "/table");
  }

  getTablesReact(): Observable<Table[]> {
    const url = this.pokerUrl + "/react/table";
    return this.sse.getServerSentEvent(url);
  }

  addTable(name: string): Observable<Table> {
    const url = `${this.pokerUrl}/table`;
    const req = {name: name}
    return this.http.post<Table>(url, req, this.httpOptions);
  }

  joinToTable(table: { name: string; id: number | undefined }, user: User): Observable<User> {
    const url = `${this.pokerUrl}/table/${table.id}/join`;
    return this.http.post<User>(url, user, this.httpOptions);
  }

  getUser(userId: number): Observable<User> {
    const url = `${this.pokerUrl}/user/${userId}`;
    return this.http.get<User>(url);
  }


  getTable(tableId: number, userId: number):Observable<TableDetails> {
    const url = `${this.pokerUrl}/table/${tableId}/user/${userId}/details`;
    return this.http.get<TableDetails>(url);
  }

  getTableReact(tableId: number):Observable<TableDetails> {
    const url = `${this.pokerUrl}/react/table/${tableId}/details`;
    return this.sse.getServerSentEvent(url);
  }

  setStatus(tableId?: number, userId?: number, status?: string):Observable<void> {
    const url = `${this.pokerUrl}/table/${tableId}/user/${userId}/status/${status}`;
    return this.http.put<void>(url, "{}", this.httpOptions);
  }

  sendVote(tableId?: number, userId?: number, vote?: number):Observable<void> {
    const url = `${this.pokerUrl}/table/${tableId}/user/${userId}/vote/${vote}`;
    return this.http.put<void>(url, "{}", this.httpOptions);
  }

  cancelVote(tableId?: number, userId?: number):Observable<void> {
    const url = `${this.pokerUrl}/table/${tableId}/user/${userId}/vote/cancel`;
    return this.http.put<void>(url, "{}", this.httpOptions);
  }

  removeTable(tableId: number):Observable<Table[]> {
    const url = `${this.pokerUrl}/table/${tableId}`;
    return this.http.delete<Table[]>(url);
  }

  removeUser(tableId: number, userId: number):Observable<void> {
    const url = `${this.pokerUrl}/table/${tableId}/user/${userId}`;
    return this.http.delete<void>(url);
  }

  getCards(tableId: number):Observable<Card[]> {
    return new Observable<Card[]>(observer => {
      observer.next([
        {name: '1', code: 1},
        {name: '2', code: 2},
        {name: '3', code: 3},
        {name: '5', code: 5},
        {name: '8', code: 8},
        {name: '13', code: 13},
        {name: '21', code: 21},
        {name: '34', code: 34},
        {name: '55', code: 55}
      ]);
      observer.complete();
      return {unsubscribe() {}};
    });
  }
}
