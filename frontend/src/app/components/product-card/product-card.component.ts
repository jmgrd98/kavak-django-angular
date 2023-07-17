import { Component } from '@angular/core';
import { json } from 'express';
import { SharedService } from 'src/app/shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.sass']
})
export class ProductCardComponent {

  constructor(
    private service: SharedService,
    private router: Router
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

  viewDetails(id: number) {
    this.router.navigate(['/products', id]);
  }

}
