import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CareerComponent } from './pages/component-career/career/career.component';
import { ClassroomComponent } from './pages/component-classroom/classroom/classroom.component';
import { CourseComponent } from './pages/component-course/course/course.component';
import { DayComponent } from './pages/component-day/day/day.component';
import { EntitiesComponent } from './pages/component-entities/entities/entities.component';
import { LevelComponent } from './pages/component-level/level/level.component';
import { ScheduleComponent } from './pages/component-schedule/schedule/schedule.component';
import { schoolYearComponent } from './pages/component-school-year/school-year/school-year.component';
import { StatusComponent } from './pages/component-status/status/status.component';
import { SubjectComponent } from './pages/component-subject/subject/subject.component';
import { TeacherComponent } from './pages/component-teacher/teacher/teacher.component';
import { UserComponent } from './pages/component-user/user/user.component';
import { WeekdaysComponent } from './pages/component-weekdays/weekdays/weekdays.component';


const routes: Routes = [
  {path:'pages',
  loadChildren:() => import('./pages/component-career/career.module').then(m=>m.CareerModule)},
  {path:'pages',
  loadChildren:() => import('./pages/component-classroom/classroom.module').then(m=>m.ClassroomModule)},
  {path:'pages',
  loadChildren:() => import('./pages/component-course/course.module').then(m=>m.CourseModule)},
  {path:'pages',
  loadChildren:() => import('./pages/component-day/day.module').then(m=>m.DayModule)},
  {path:'pages',
  loadChildren:() => import('./pages/component-entities/entities.module').then(m=>m.EntitiesModule)},
  {path:'pages',
  loadChildren:() => import('./pages/component-level/level.module').then(m=>m.LevelModule)},
  {path:'pages',
  loadChildren:() => import('./pages/component-schedule/schedule.module').then(m=>m.ScheduleModule)},
  {path:'pages',
  loadChildren:() => import('./pages/component-school-year/school-year.module').then(m=>m.schoolYearModule)},
  {path:'pages',
  loadChildren:() => import('./pages/component-status/status.module').then(m=>m.StatusModule)},
  {path:'pages',
  loadChildren:() => import('./pages/component-subject/subject.module').then(m=>m.SubjectModule)},
  {path:'pages',
  loadChildren:() => import('./pages/component-teacher/teacher.module').then(m=>m.TeacherModule)},
  {path:'pages',
  loadChildren:() => import('./pages/component-user/user.module').then(m=>m.UserModule)},
  {path:'pages',
  loadChildren:() => import('./pages/component-weekdays/weekdays.module').then(m=>m.WeekdaysModule)},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
