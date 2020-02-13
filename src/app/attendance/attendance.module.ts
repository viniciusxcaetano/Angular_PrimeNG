
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AttendanceEditComponent } from './attendance-edit/attendance-edit.component';
import { AttendanceService } from '../service/attendance.service';
import { AttendanceListComponent } from './attendance-list/attendance-list.component';
import { AttendanceComponent } from './attendance.component';
import { SharedModule } from '../shared/shared.module';
import { AttendancesRoutingModule } from './attendances-routing.module';

@NgModule({
  imports: [CommonModule, SharedModule, AttendancesRoutingModule],
  exports: [AttendanceComponent, AttendanceEditComponent],
  declarations: [AttendanceComponent, AttendanceEditComponent, AttendanceListComponent],
  providers: [AttendanceService]
})
export class AttendanceModule { }