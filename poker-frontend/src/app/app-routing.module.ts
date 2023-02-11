import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {TablesComponent} from "./tables/tables.component";
import {TableComponent} from "./table/table.component";
import {TableJoinComponent} from "./table-join/table-join.component";

const routes: Routes = [
  {path: "", redirectTo: "/tables", pathMatch: "full"},
  {path: "tables", component: TablesComponent},
  {path: "table/:tableId/user/:userId", component: TableComponent},
  {path: "table/:id/join", component: TableJoinComponent}
];

@NgModule({
  declarations: [],
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
