import { Component, OnInit, Input } from '@angular/core';
import { Courses } from 'src/app/shared/types';

@Component({
  selector: 'app-lecturer-list',
  templateUrl: './lecturer-list.component.html',
  styleUrls: ['./lecturer-list.component.sass'],
})
export class LecturerListComponent implements OnInit {
  @Input()
  lecturerCourses!: Array<Courses>;

  constructor() {}

  ngOnInit(): void {
    console.log(this.lecturerCourses);
  }
}
