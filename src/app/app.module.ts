import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderModule } from './modules/core/header/header.module';
import { LoginComponent } from './modules/core/login/login.component';
import { LoginModule } from './modules/core/login/login.module';
import { SharedModule } from './modules/shared/shared.module';
import { UserCardModule } from './modules/user/user-card/user-card.module';
import { AboutComponent } from './modules/core/about/about.component';
import { RegisterComponent } from './modules/core/register/register.component';

@NgModule({
  declarations: [AppComponent, AboutComponent, RegisterComponent],
  imports: [
    BrowserModule,
    HeaderModule,
    UserCardModule,
    SharedModule,
    LoginModule,
    RouterModule.forRoot([
      { path: 'login', component: LoginComponent },
      { path: 'about', component: AboutComponent },
      { path: 'register', component: RegisterComponent },
      { path: '', redirectTo: '/login', pathMatch: 'full' },
    ]),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
