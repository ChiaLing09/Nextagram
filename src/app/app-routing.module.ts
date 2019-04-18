import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserProfileComponent } from './user-profile/user-profile.component'
import { MainpageComponent } from './mainpage/mainpage.component';


const routes: Routes = [
  { path: 'users/:id', component: UserProfileComponent },
  { path: '', component: MainpageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
