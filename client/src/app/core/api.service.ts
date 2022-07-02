import { Injectable } from '@angular/core';
import { Lecturer } from '../shared/types';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}
  getLecturersList(): Observable<Array<Lecturer>> {
    let result = this.http.get<Array<Lecturer>>(
      'http://localhost:3000/api/faculty'
    );
    console.log(result);
    return result;
  }
}
