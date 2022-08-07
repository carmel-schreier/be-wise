import { Component, Input, OnInit } from '@angular/core';
import { Courses } from 'src/app/shared/types';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-info',
  templateUrl: './course-info.component.html',
  styleUrls: ['./course-info.component.sass'],
})
export class CourseInfoComponent implements OnInit {
  show = false;
  @Input()
  theCourse!: Courses;
  theCourses!: string[];

  constructor(private router: Router) {}

  ngOnInit(): void {}
}
