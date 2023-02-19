import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TablesComponent } from './tables/tables.component';
import { AppRoutingModule } from './app-routing.module';
import { TableComponent } from './table/table.component';
import { HttpClientModule } from "@angular/common/http";
import { TableAddComponent } from './table-add/table-add.component';
import {FormsModule} from "@angular/forms";
import { TableJoinComponent } from './table-join/table-join.component';
import { TableAdminPanelComponent } from './table-admin-panel/table-admin-panel.component';
import { TableResultsPanelComponent } from './table-results-panel/table-results-panel.component';
import { TableVotingPanelComponent } from './table-voting-panel/table-voting-panel.component';
import { TableProgressPanelComponent } from './table-progress-panel/table-progress-panel.component';
import {CardModule} from "primeng/card";
import {TableModule} from "primeng/table";
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";
import {DropdownModule} from "primeng/dropdown";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {SelectButtonModule} from "primeng/selectbutton";
import {TagModule} from "primeng/tag";
import {ChartModule} from "primeng/chart";

@NgModule({
  declarations: [
    AppComponent,
    TablesComponent,
    TableComponent,
    TableAddComponent,
    TableJoinComponent,
    TableAdminPanelComponent,
    TableResultsPanelComponent,
    TableVotingPanelComponent,
    TableProgressPanelComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    CardModule,
    TableModule,
    ButtonModule,
    RippleModule,
    DropdownModule,
    SelectButtonModule,
    TagModule,
    ChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
