import { AfterViewInit, Component, OnInit, Renderer2 } from '@angular/core';
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
export class CoursesComponent implements OnInit, AfterViewInit {
  courses!: Array<Courses>;
  lecturerCourses!: Array<Courses>;
  theCourse!: Courses;
  selectedCategory = 'All';
  tableSort!: CoursesSort;
  courseIndex!: number;
  active = true;
  expandIcon = `bi-plus-square`;
  theButton!: any;
  categories = ['All'];
  show = true;

  constructor(private apiService: ApiService, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.getAllCourses();
    this.tableSort = {
      column: 'name',
      dirAsc: true,
    };
  }

  ngAfterViewInit(): void {}

  getAllCourses() {
    this.apiService.getCoursesList().subscribe({
      next: (data: Array<Courses>) => {
        this.courses = data;
        this.getCategories(this.courses);
        //return this.courses;
      },
      error: (err) => {
        console.error(err);
      },
      complete() {},
    });
  }

  getCategories(courses: Array<Courses>) {
    for (let i = 0; i < courses.length; i++) {
      let flag = false;
      for (let j = 0; j < this.categories.length; j++) {
        if (this.courses[i].category == this.categories[j]) flag = true;
      }
      if (!flag) {
        this.categories.push(this.courses[i].category);
      }
    }
  }

  filterByCategory() {
    this.show = this.selectedCategory == `All` ? true : false;
    if (this.active === false) this.closeCourseDetails(this.courseIndex);
  }

  exportCoursesData() {
    if (this.selectedCategory == `All`) {
      this.apiService.exportCourses().subscribe({
        next: (data: FilePath) => {
          window.open(`http://localhost:4500/eports`);
        },
        error: (err) => {
          console.error(err);
        },
      });
    } else {
      this.apiService.exportFilteredCourses(this.selectedCategory).subscribe({
        next: (data: FilePath) => {
          window.open(`http://localhost:4500/eports`);
        },
        error: (err) => {
          console.error(err);
        },
      });
    }
  }

  sortCourses(column: sortColumn) {
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

  showCourseDetails(i: number) {
    this.theCourse = this.courses[i];
    this.courseIndex = i;
    this.active = false;
    let code = this.courses[i].code;
    this.theButton = this.renderer.selectRootElement(`#A${code}`);
    this.renderer.removeClass(this.theButton, `bi-plus-square`);
    this.renderer.addClass(this.theButton, `bi-dash-square`);
  }
  closeCourseDetails(i: number) {
    if (i == this.courseIndex) {
      this.courseIndex = -1;
      this.renderer.removeClass(this.theButton, `bi-dash-square`);
      this.renderer.addClass(this.theButton, `bi-plus-square`);
      this.active = true;
    }
  }
}
