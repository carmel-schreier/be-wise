import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './courses/courses.component';
import { FormsModule } from '@angular/forms';
import { CourseInfoComponent } from './course-info/course-info.component';
import { AppRoutingModule } from '../app-routing.module';
import { LecturerListComponent } from './lecturer-list/lecturer-list.component';

@NgModule({
  declarations: [CoursesComponent, CourseInfoComponent, LecturerListComponent],
  imports: [CommonModule, FormsModule, AppRoutingModule],
})
export class CoursesModule {}
