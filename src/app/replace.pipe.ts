import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replace'
})
export class ReplacePipe implements PipeTransform {

  constructor() {
    
  }
 
  transform(value: any, args?: any): string {
    const item = document.createElement('ion-item');
    const input = document.createElement('ion-input');

    //  console.log('replaace pipe value', value, );
   //   console.log(' replace pipe args', args)
    // For each argument
    for(var key in args) {
      console.log('replace pipe', args[key]);
      
      if(value && args[key] == 'input') {

        value = value.replace(key , item.appendChild(input).innerHTML)

      }
    }
    return value;
}

}
