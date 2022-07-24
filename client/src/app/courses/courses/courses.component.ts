import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/api.service';
import {
  Categories,
  Courses,
  FilePath,
  sortColumn,
  CoursesSort,
} from 'src/app/shared/types';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.sass'],
})
export class CoursesComponent implements OnInit {
  courses!: Array<Courses>;
  showDetails = false;
  theCourse!: Courses;
  categories!: Array<Categories>;
  selectedCategory = 'All';
  tableSort!: CoursesSort;

  //getCategories(): Array<string> {
  //  for (let i = 0; i < this.courses.length; i++) {
  //    this.categories.push(this.courses[i].category);
  //  }
  //  return this.categories;
  //}

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.getAllCourses();
    this.getCategoriesList();
    this.tableSort = {
      column: 'name',
      dirAsc: true,
    };
  }

  getAllCourses() {
    this.apiService.getCoursesList().subscribe({
      next: (data: Array<Courses>) => {
        this.courses = data;
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

  getCoursesByCategory(category: string) {
    this.apiService.getFilteredCourses(category).subscribe({
      next: (data: Array<Courses>) => {
        this.courses = data;
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

  //
  getCategoriesList() {
    this.apiService.getCategories().subscribe({
      next: (data: Array<Categories>) => {
        this.categories = data;
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

  showCourseDetails(i: number) {
    console.log('i was clicked' + `${i}`);
    this.theCourse = this.courses[i];
    this.showDetails = !this.showDetails;
    //this.icon = this.showDetails ? 'bi-plus-square' : 'bi-dash-square';
    return;
  }

  filterByCategory() {
    if (this.selectedCategory != 'All') {
      this.getCoursesByCategory(this.selectedCategory);
    } else {
      this.getAllCourses();
    }
  }
  exportCoursesData() {
    this.apiService.exportCourses().subscribe({
      next: (data: FilePath) => {
        //console.log(`${environment.serverUrl}/${data.name}`);
        window.open(`http://localhost:4500/eports`);
      },
      error: (err) => {
        console.error(err);
      },
    });
  }
  //sortCourses(culomb: string) {}

  //displaySort(culomb: string) {}

  sortCourses(column: sortColumn) {
    console.log(column);
    if (this.tableSort.column === column) {
      this.tableSort.dirAsc = !this.tableSort.dirAsc;
    } else {
      this.tableSort.column = column;
      this.tableSort.dirAsc = true;
    }

    const direction = this.tableSort.dirAsc ? 'ASC' : 'DESC';

    this.apiService.getSortedCourses(column, direction).subscribe({
      next: (data: Array<Courses>) => {
        this.courses = data;
      },
      error: (err) => console.error(err),
    });
  }

  displaySort(column: sortColumn): string {
    if (this.tableSort.column === column) {
      return this.tableSort.dirAsc ? 'bi-chevron-up' : 'bi-chevron-down';
    }
    return 'bi-chevron-expand';
  }
}
