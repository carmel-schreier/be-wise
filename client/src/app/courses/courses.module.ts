import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './courses/courses.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CoursesComponent],
  imports: [CommonModule, FormsModule],
})
export class CoursesModule {}
