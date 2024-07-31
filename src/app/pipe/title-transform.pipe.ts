import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replace',
  standalone: true
})
export class TitleTransformPipe implements PipeTransform {

  transform(value: string, from: string, to: string): string {
    return value.split(from).join(to);
  }

}
