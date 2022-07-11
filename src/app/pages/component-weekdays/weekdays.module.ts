import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeekdaysComponent } from './weekdays/weekdays.component';
import { WeekdaysRoutingModule } from './weekdays-routing.module';



@NgModule({
  declarations: [
    WeekdaysComponent

  ],
  imports: [
    CommonModule,
    WeekdaysRoutingModule  ]
})
export class WeekdaysModule { }
