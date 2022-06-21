import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { HeaderModule } from './modules/core/header/header.module';
import { LoginModule } from './modules/core/login/login.module';
import { SharedModule } from './modules/shared/shared.module';
import { UserCardModule } from './modules/user/user-card/user-card.module';
import { UsersPageModule } from './modules/user/users-page/users-page.module';
import { EditUserComponent } from './modules/user/edit-user/edit-user.component';
import { WhiteListUsersService } from 'src/services/white.list.users.service';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { httpInterceptorProviders } from './modules/core/http-interceptors';

@NgModule({
  declarations: [AppComponent, EditUserComponent],
  imports: [
    BrowserModule,
    HeaderModule,
    UserCardModule,
    SharedModule,
    LoginModule,
    AppRoutingModule,
    UsersPageModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CommonModule,
    MatSnackBarModule,
  ],
  providers: [WhiteListUsersService, httpInterceptorProviders],
  bootstrap: [AppComponent],
})
export class AppModule {}
