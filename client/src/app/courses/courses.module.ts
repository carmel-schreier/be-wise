import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './courses/courses.component';
import { FormsModule } from '@angular/forms';
import { CourseInfoComponent } from './course-info/course-info.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [CoursesComponent, CourseInfoComponent],
  imports: [CommonModule, FormsModule, AppRoutingModule],
})
export class CoursesModule {}
