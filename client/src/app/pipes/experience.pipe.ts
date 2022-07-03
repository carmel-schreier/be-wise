import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'experience',
})
export class ExperiencePipe implements PipeTransform {
  transform(value: any): any {
    const currentYear: any = new Date().getFullYear();
    const startingYear: any = new Date(value).getFullYear();
    let period = Math.round(currentYear - startingYear);
    let text: string =
      period < 1 ? `One of our new recruits!` : `${period} Years of experience`;
    return text;
  }
}
