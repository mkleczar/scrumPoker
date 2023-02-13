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

@NgModule({
  declarations: [
    AppComponent,
    TablesComponent,
    TableComponent,
    TableAddComponent,
    TableJoinComponent,
    TableAdminPanelComponent,
    TableResultsPanelComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
