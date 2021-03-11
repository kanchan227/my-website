import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InternsComponent} from './interns/interns.component';
import  {RegistorComponent} from './registor/registor.component';
import {LoginComponent} from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AddUserComponent } from './user/add-user/add-user.component';
import { EditUserComponent } from './user/edit-user/edit-user.component';
import { UserGuard } from './user/user.guard';
import { UserDashboardComponent } from './login/user-login-dashboard/user-dashboard/user-dashboard.component';
import { RegistorDbComponent } from './registor/Registor_list_db/registor-db/registor-db.component';
import { LogoutComponent } from './login/logout/logout.component';


 const routes: Routes = [{

  path:'home',
  component:HomeComponent

  },
 { path:'interns',
  component:InternsComponent,
  canActivate:[UserGuard]
},{
  path:'registor',
  component:RegistorComponent

},{
  path:'login',
  component:LoginComponent
},{
  path:"",
  component:HomeComponent
},{
  path:'add-user',
  component:AddUserComponent,
  canActivate:[UserGuard]
},
{
  path:'edit-user',
  component:EditUserComponent,
  canActivate:[UserGuard],

},{
  path:'user-dashboard',
  component:UserDashboardComponent
},{
  path:'registor-db',
  component:RegistorDbComponent,
  canActivate:[UserGuard]
},
{
  path:'logout',
  component:LogoutComponent,

}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
