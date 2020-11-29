import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

    { path: '', redirectTo: 'home', pathMatch: 'full' },
    {
      path:'home',
      loadChildren:() => import('./pages/home/home.module').then((m) =>m.HomeModule),
    },
    // {
    //   path:'list',
    //   loadChildren:() => import('./pages/footer/footer.module').then((m) =>m.FooterModule),
    // },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
