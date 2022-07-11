import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { WeekdaysComponent } from './weekdays/weekdays.component';



const routes: Routes = [
  {path: 'weekdays',component:WeekdaysComponent},

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
}) 
export class WeekdaysRoutingModule { }
