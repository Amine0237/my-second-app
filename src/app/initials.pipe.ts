import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'initials'
})
export class InitialsPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    let values = (value as string).split(' ');
    return values[0][0]+values[1][0];
  }

}
