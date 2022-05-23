import { Pipe, PipeTransform } from '@angular/core';
import { FEMALE, MALE } from 'src/constants';

@Pipe({
  name: 'maleFemale',
})
export class MaleFemalePipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): string {
    console.log(value);
    if (value === 'Male') {
      return MALE;
    }

    if (value === 'Female') {
      return FEMALE;
    }

    return [MALE, FEMALE][Math.floor(Math.random() * 2)];
  }
}
