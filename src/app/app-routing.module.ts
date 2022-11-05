import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RegisterComponent} from "./page/register/register.component";
import {TableComponent} from "./page/table/table.component";
import {EditComponent} from "./page/edit/edit.component";

const routes: Routes = [
  { path: 'home', component: TableComponent},
  { path: 'newregister', component: RegisterComponent },
  {path: 'edit/:id', component: EditComponent},
  { path: '**', pathMatch:'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
