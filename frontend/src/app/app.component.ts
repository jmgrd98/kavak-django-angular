import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  cars = [
    {
      name: 'Ford',
      marca: 'Ford',
      model: 'Mustang',
      year: 2020,
      price: 100000,
    },
  ]
}
