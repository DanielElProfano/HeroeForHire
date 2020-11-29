import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChooseRoutingModule } from './choose-routing.module';
import { ChooseComponent } from './choose-component/choose.component';


@NgModule({
  declarations: [ChooseComponent],
  imports: [
    CommonModule,
    ChooseRoutingModule
  ]
})
export class ChooseModule { }
