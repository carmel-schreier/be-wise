import { Injectable } from '@angular/core';
import { Lecturer, Courses, Categories, FilePath } from '../shared/types';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}
  getLecturersList(): Observable<Array<Lecturer>> {
    let result = this.http.get<Array<Lecturer>>(
      'http://localhost:3000/api/lecturers'
    );
    console.log(result);
    return result;
  }

  getCategories(): Observable<Array<Categories>> {
    let result = this.http.get<Array<Categories>>(
      'http://localhost:3000/api/courses/categories'
    );
    console.log(result);
    return result;
  }

  getCoursesList(): Observable<Array<Courses>> {
    let result = this.http.get<Array<Courses>>(
      'http://localhost:3000/api/courses'
    );
    console.log(result);
    return result;
  }
  getSortedCourses(
    column: string,
    direction: string
  ): Observable<Array<Courses>> {
    return this.http.get<Array<Courses>>(
      `http://localhost:3000/api/courses/sorted?column=${column}&sort=${direction}`
    );
  }
  exportCourses(): Observable<FilePath> {
    return this.http.get<FilePath>(`http://localhost:3000/api/courses/export`);
  }
  exportFilteredCourses(category: string): Observable<FilePath> {
    return this.http.get<FilePath>(
      `http://localhost:3000/api/courses/export/filtered?category=${category}`
    );
  }
}
