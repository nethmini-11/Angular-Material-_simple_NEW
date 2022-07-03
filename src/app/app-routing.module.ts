import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UpdateComponent } from './update/update.component';
import {ListusersComponent } from './listusers/listusers.component';
import { AlluserComponent } from './alluser/alluser.component';
import { DeleteuserComponent } from './deleteuser/deleteuser.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'update' ,component:UpdateComponent},
  {path:'userlist' ,component:ListusersComponent},
  {path:'list',component:AlluserComponent},
  {path:'delete',component:DeleteuserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }