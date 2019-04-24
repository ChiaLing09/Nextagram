import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserProfileComponent } from './user-profile/user-profile.component'
import { MainpageComponent } from './mainpage/mainpage.component';
import { SignupPageComponent } from './signup-page/signup-page.component'
import { LoginPageComponent } from './login-page/login-page.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { CommentPageComponent } from './comment-page/comment-page.component';


const routes: Routes = [
  { path: 'login', component: LoginPageComponent },
  { path: 'signup', component: SignupPageComponent },
  { path: 'users/:id', component: UserProfileComponent },
  { path: 'editProfile', component: EditProfileComponent },
  { path: 'comment', component: CommentPageComponent },
  { path: '', component: MainpageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
