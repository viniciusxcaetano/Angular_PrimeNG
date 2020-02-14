import { NgModule } from "@angular/core";
import { AttendanceEditComponent } from './attendance-edit/attendance-edit.component';
import { AttendanceService } from '../service/attendance.service';
import { AttendanceListComponent } from './attendance-list/attendance-list.component';
import { AttendanceComponent } from './attendance.component';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{ path: '', component: AttendanceComponent }];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule, AttendanceComponent],
  declarations: [AttendanceComponent, AttendanceEditComponent, AttendanceListComponent],
  providers: [AttendanceService]
})
export class AttendanceModule { }