import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'roundNumber',
  standalone: true
})
export class RoundNumberPipe implements PipeTransform {

  transform(value: number): number {
    if (isNaN(value)) {
      return value;
    }
    return Math.round(value);
  }
}
