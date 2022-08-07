import { LecturerListComponent } from './courses/lecturer-list/lecturer-list.component';
import { CoursesModule } from './courses/courses.module';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LecturersComponent } from './lecturers/lecturers.component';
import { CoursesComponent } from './courses/courses/courses.component';

const routes: Routes = [
  { path: 'lecturers-component', component: LecturersComponent },
  { path: 'courses-component', component: CoursesComponent },
  {
    path: 'courses-component/lecturer-list-component',
    component: LecturerListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
