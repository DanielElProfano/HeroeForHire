import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JoinRoutingModule } from './join-routing.module';
import { JoinComponent } from './join/join-component/join.component';


@NgModule({
  declarations: [JoinComponent],
  imports: [
    CommonModule,
    JoinRoutingModule
  ]
})
export class JoinModule { }
