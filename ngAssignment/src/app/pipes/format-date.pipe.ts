import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'formatDate'
})
export class FormatDatePipe implements PipeTransform {

  transform(text_value: string | undefined, date_format:string): string {
    if(!text_value){
      return '';
    };


    const datePipe = new DatePipe('en-US','2015-12-31T23:59:50+05:30');
    let formattedValue: string | null;

    switch(date_format){
      case 'short-date':
        formattedValue = datePipe.transform(text_value, 'dd MMM yyyy' || '');
        break;
      
      case 'short-time':
        formattedValue = datePipe.transform(text_value, 'HH:mm' || '');
        break;

      default:
        formattedValue =  null;  
    }
    return formattedValue || '';
  }

}
