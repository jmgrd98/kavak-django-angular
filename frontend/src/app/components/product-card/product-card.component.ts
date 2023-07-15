import { Component } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.sass']
})
export class ProductCardComponent {

  constructor(
    private service: SharedService
  ) { }

  cars = [
    {
    name: 'Fiesta',
    marca: 'Ford',
    model: 'Mustang',
    year: 2020,
    price: 100000,
  },
  {
    name: 'Fiesta',
    marca: 'Ford',
    model: 'Mustang',
    year: 2020,
    price: 100000,
  },
  {
    name: 'Fiesta',
    marca: 'Ford',
    model: 'Mustang',
    year: 2020,
    price: 100000,
  },
  {
    name: 'Fiesta',
    marca: 'Ford',
    model: 'Mustang',
    year: 2020,
    price: 100000,
  }
]

  select() {
    console.log('Selecionado')
  }
}
