import { Component } from '@angular/core';
import { json } from 'express';
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

  ngOnInit(): void {
    this.showCarList()
  }

  carList: any = []

  showCarList() {
    this.service.getCars().subscribe(data => {
      const jsonString = data.toString()
      const jsonData = JSON.parse(jsonString)
      this.carList = jsonData
      console.log(this.carList);
    })
  }

  select() {
    console.log('Selecionado')
  }
}
