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
  //showDetails = false;
  theCourse!: Courses;
  categories!: Array<Categories>;
  selectedCategory = 'All';
  tableSort!: CoursesSort;
  courseIndex!: number;
  active = true;
  expandIcon = `bi-plus-square`;
  theButton!: any;

  constructor(private apiService: ApiService, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.getAllCourses();
    this.getCategoriesList();
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

  filterByCategory() {
    if (this.selectedCategory != 'All') {
      this.getCoursesByCategory(this.selectedCategory);
    } else {
      this.getAllCourses();
    }
  }
  exportCoursesData() {
    this.apiService.exportCourses(this.selectedCategory).subscribe({
      next: (data: FilePath) => {
        //console.log(`${environment.serverUrl}/${data.name}`);
        window.open(`http://localhost:4500/eports`);
      },
      error: (err) => {
        console.error(err);
      },
    });
  }

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

  showCourseDetails(i: number) {
    console.log('i was clicked' + `${i}`);
    this.theCourse = this.courses[i];
    console.log(this.theCourse);
    this.courseIndex = i;
    this.active = false;
    console.log(this.theButton);
    let code = this.courses[i].code;
    this.theButton = this.renderer.selectRootElement(`.${code}`);
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
