import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EntitiesComponent } from './entities/entities.component';



const routes: Routes = [
  {path: 'entities',component:EntitiesComponent},

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
}) 
export class EntitiesRoutingModule { }
