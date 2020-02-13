import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { ToastModule } from 'primeng/toast';
import { MessageModule } from 'primeng/message';
import { PanelModule } from 'primeng/panel';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ButtonModule } from 'primeng/button';
import { TabViewModule } from 'primeng/tabview';
import { CodeHighlighterModule } from 'primeng/codehighlighter';

import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './view/home/home.component';
import { AppTopBarComponent } from './layout/app.topbar.component';
import { AppSideBarComponent } from './layout/app.sidebar.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { AttendanceListComponent } from './attendance/attendance-list/attendance-list.component';
import { AttendanceEditComponent } from './attendance/attendance-edit/attendance-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AppTopBarComponent,
    AppSideBarComponent,
    AttendanceComponent,
    AttendanceListComponent,
    AttendanceEditComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule, CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ToastModule,
    MessageModule,
    PanelModule,
    DropdownModule,
    InputTextModule,
    InputTextareaModule,
    ButtonModule,
    TabViewModule,
    CodeHighlighterModule,

    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
