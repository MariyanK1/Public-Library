import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderModule } from './modules/core/header/header.module';
import { SharedModule } from './modules/shared/shared.module';
import { UserCardModule } from './modules/user/user-card/user-card.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HeaderModule, UserCardModule, SharedModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
