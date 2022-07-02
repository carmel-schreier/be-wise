import { Lecturer } from './../shared/types';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../core/api.service';

@Component({
  selector: 'app-lecturers',
  templateUrl: './lecturers.component.html',
  styleUrls: ['./lecturers.component.sass'],
})
export class LecturersComponent implements OnInit {
  lecturers!: Array<Lecturer>;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getLecturersList().subscribe({
      next: (data: Array<Lecturer>) => {
        this.lecturers = data;
        console.log(data);
      },
      error: (err) => {
        console.error(err);
      },
      complete() {
        console.log('complete');
      },
    });
  }
}
