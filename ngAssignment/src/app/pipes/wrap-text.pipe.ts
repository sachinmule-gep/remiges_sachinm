import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'wraptext',
})
export class WraptextPipe implements PipeTransform {
  transform(text_value: string | undefined, word_count: number): string {
    if (!text_value) {
      return '';
    }

    const words = text_value.split(' ');
    return (
      words.slice(0, word_count).join(' ') +
      (words.length > word_count ? '...' : '')
    );
  }
}
