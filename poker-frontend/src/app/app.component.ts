import {Component, OnInit} from '@angular/core';
import {Message, MessageService, PrimeNGConfig} from "primeng/api";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MessageService]
})
export class AppComponent implements OnInit {
  title = 'Scrum poker';

  messages: Message[] = [];

  constructor(private primengConfig: PrimeNGConfig) {}

  ngOnInit() {
    this.primengConfig.ripple = true;
    this.messages.push({ severity:'success', summary : 'Success', detail : 'Message Content' });
  }
}
