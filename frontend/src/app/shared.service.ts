import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  apiUrl = 'http://127.0.0.1:8081/api/'
  photoUrl = 'http://127.0.0.1:8081/media/'

  constructor(
    private http: HttpClient
  ) { }

  getCars(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl + 'products')
  }

  getCar(id: number): Observable<any> {
    return this.http.get<any>(this.apiUrl + 'products/' + id + '/')
  }

  addCar(car: any): Observable<any> {
    return this.http.post<any>(this.apiUrl + 'products/', car)
  }

  updateCar(id: number, car: any): Observable<any> {
    return this.http.put<any>(this.apiUrl + 'products/' + id + '/', car)
  }

  deleteCar(id: number): Observable<any> {
    return this.http.delete<any>(this.apiUrl + 'products/' + id + '/')
  }

  uploadPhoto(photo: any): Observable<any> {
    return this.http.post<any>(this.photoUrl + 'save_file/', photo)
  }


}