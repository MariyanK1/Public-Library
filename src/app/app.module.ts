import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderModule } from './modules/core/header/header.module';
import { LoginModule } from './modules/core/login/login.module';
import { SharedModule } from './modules/shared/shared.module';
import { UserCardModule } from './modules/user/user-card/user-card.module';
import { UsersPageModule } from './modules/user/users-page/users-page.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HeaderModule,
    UserCardModule,
    SharedModule,
    LoginModule,
    AppRoutingModule,
    UsersPageModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
