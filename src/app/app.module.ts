import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginPageComponent } from './login-page/login-page.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { CommentPageComponent } from './comment-page/comment-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent,
    UserProfileComponent,
    SignupPageComponent,
    LoginPageComponent,
    EditProfileComponent,
    CommentPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
