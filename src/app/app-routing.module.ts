import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SummaryComponent } from './summary/summary.component';
import { UserComponent } from './user/user.component';
import { EdituserComponent } from './edituser/edituser.component';
import { EditGroupComponent } from './edit-group/edit-group.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AuthCallbackComponent } from './auth-callback/auth-callback.component';
import { AuthGuardService } from './shared/services/auth-guard.service';


const routes: Routes = [
  {path:'user', component:UserComponent},
  {path:'edituser/:id', component:EdituserComponent},
  {path:'editgroup', component:EditGroupComponent},
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'home', component:SummaryComponent, canActivate: [AuthGuardService] },
  {path:'auth-callback', component:AuthCallbackComponent},
  {path:'', redirectTo:'/home', pathMatch:'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
