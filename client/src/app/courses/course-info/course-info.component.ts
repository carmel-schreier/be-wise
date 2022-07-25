import { Component, Input, OnInit } from '@angular/core';
import { Courses } from 'src/app/shared/types';

@Component({
  selector: 'app-course-info',
  templateUrl: './course-info.component.html',
  styleUrls: ['./course-info.component.sass'],
})
export class CourseInfoComponent implements OnInit {
  @Input()
  theCourse!: Courses;

  constructor() {}

  ngOnInit(): void {
    console.log('in course-info' + this.theCourse);
  }
}
