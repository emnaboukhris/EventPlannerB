import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false

})
export class FilterPipe implements PipeTransform {
  transform(items: any[], property: string, value: string): any[] {
    if (!items) {
      return [];
    }
    if (!property || !value) {
      return items;
    }

    return items.filter(item => item[property].toLowerCase().includes(value.toLowerCase()));
  }}
