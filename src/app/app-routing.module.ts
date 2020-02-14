import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './view/home/home.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'attendance', loadChildren: () => import('./attendances/attendances.module').then(m => m.AttendancesModule) },

    ], { scrollPositionRestoration: 'enabled' })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }