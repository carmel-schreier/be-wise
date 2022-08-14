export interface Lecturer {
  first_name: string;
  last_name: string;
  phone: string;
  email: string;
  starting_date: Date;
}
export interface Courses {
  code: string;
  name: string;
  description: string;
  price: number;
  lessons_numb: number;
  open_date: Date;
  category: string;
  lecturer: string;
}

export interface Categories {
  category: string;
}

export interface FilePath {
  path: Courses;
}

export type sortColumn = 'name' | 'price';

export interface CoursesSort {
  column: sortColumn;
  dirAsc: boolean;
}
