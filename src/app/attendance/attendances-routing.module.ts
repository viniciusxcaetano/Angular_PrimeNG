import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { AttendanceComponent } from './attendance.component';

const routes: Routes = [{ path: '', pathMatch: 'full', component: AttendanceComponent }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AttendancesRoutingModule { }