import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LecturersComponent } from './lecturers/lecturers.component';

const routes: Routes = [
  { path: 'lecturers-component', component: LecturersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
