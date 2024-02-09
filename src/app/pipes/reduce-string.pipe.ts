import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reduceString',
  standalone: true
})
export class ReduceStringPipe implements PipeTransform {
  maxLength:number = 20;

  transform(value: string): string {
    if (value.length > this.maxLength){
      let shortenedString: string = value.substring(0, this.maxLength) + '...'
      return shortenedString
    }
    return value
  }

}
