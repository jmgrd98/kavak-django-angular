import { Component } from '@angular/core';
import { SharedService } from './shared.service';
import { json } from 'express';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

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
}
