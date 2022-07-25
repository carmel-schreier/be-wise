import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './courses/courses.component';
import { FormsModule } from '@angular/forms';
import { CourseInfoComponent } from './course-info/course-info.component';

@NgModule({
  declarations: [CoursesComponent, CourseInfoComponent],
  imports: [CommonModule, FormsModule],
})
export class CoursesModule {}
