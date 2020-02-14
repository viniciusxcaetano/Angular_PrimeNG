import { NgModule } from "@angular/core";
import { AttendanceService } from './attendance.service';
import { AttendanceListComponent } from './attendance-list/attendance-list.component';
import { AttendanceComponent } from './attendances/attendance.component';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AttendanceDetailComponent } from './attendance-detail/attendance-detail.component';

const routes: Routes = [{ path: '', component: AttendanceComponent }];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule, AttendanceComponent],
  declarations: [AttendanceComponent, AttendanceDetailComponent, AttendanceListComponent, AttendanceDetailComponent],
  providers: [AttendanceService]
})
export class AttendancesModule { }