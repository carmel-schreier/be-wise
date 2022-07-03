import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'experience',
})
export class ExperiencePipe implements PipeTransform {
  transform(value: any): any {
    const currentYear: any = new Date().getFullYear();
    console.log('currentYear:' + currentYear);
    const startingYear: any = new Date(value).getFullYear();
    console.log('startingYear:' + startingYear);
    let period = Math.round(currentYear - startingYear);
    console.log('period:' + period);
    let text: string =
      period < 1 ? `One of our new recruits!` : `${period} Years of experience`;
    return text;
  }
}
