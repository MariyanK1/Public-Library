import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RxjsComponent } from './rxjs.component';
import { RouterModule } from '@angular/router';

const routes = [
  {
    path: '',
    component: RxjsComponent,
  },
];

@NgModule({
  declarations: [RxjsComponent],
  exports: [RxjsComponent, RouterModule],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class RxjsModule {}
