//our root app component
import {Component, Pipe} from '@angular/core'

@Pipe({name:'filter'})

export class FilterPipe {
  transform(value, args) {
    if(!args[0])  return value;

    return value.filter(item => item.indexOf(args[0]) > -1);
  }
}

@Component({
  selector: 'my-app',

  template: `<h1>Angular 2 Systemjs start</h1>
   <table>
   <input type="text" [(ngModel)]="filterText">
    <tr>
        <td *ngFor="let product of products | filter: filterText">
            {{product}}
        </td>
    </tr>
    </table>
  `
})

export class FiltersComponent {
  private products = ["Apple", "Banana", "Orange"];
}