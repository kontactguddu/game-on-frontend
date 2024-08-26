import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lineBreak',
  standalone: true
})
export class LineBreakPipe implements PipeTransform {

  transform(value: string): string {
    if (!value) return value;
    
    // Replace double line breaks with paragraph tags
    let formattedText = value.replace(/\n\n/g, '</p><p>');

    // Replace single line breaks with <br>
    formattedText = formattedText.replace(/\n/g, '<br>');

    // Wrap the entire string in <p> tags
    return `<p>${formattedText}</p>`;
  }

}
