import { Component } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.sass']
})
export class ProductPageComponent {

  constructor(
    private service: SharedService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const id = +params['id']; // '+' operator converts the string to a number
      this.getProduct(id);
    });
  }

  car = {}

  getProduct(id: number) {
    this.service.getCar(id).subscribe(data => {
      const jsonString = data.toString()
      const jsonData = JSON.parse(jsonString)
      this.car = jsonData;
      console.log(this.car);
    })
  }

}
