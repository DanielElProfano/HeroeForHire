import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChooseComponent } from '../choose/choose-component/choose.component';

const routes: Routes = [{ path: '', component:ChooseComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChooseRoutingModule { }
