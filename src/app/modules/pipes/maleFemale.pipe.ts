import { Pipe, PipeTransform } from '@angular/core';
import { FEMALE, MALE } from 'src/constants';

@Pipe({
  name: 'maleFemale',
})
export class MaleFemalePipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): string {
    if (value === 'male') {
      return MALE[0].toLocaleUpperCase();
    }

    if (value === 'female') {
      return FEMALE[0].toLocaleUpperCase();
    }

    return [MALE, FEMALE][Math.floor(Math.random() * 2)];
  }
}
