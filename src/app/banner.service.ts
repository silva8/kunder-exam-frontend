import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BannerService {

  constructor(private http: HttpClient) { }

  getBannerData() {
    return this.http.get('http://hack.kunderlabs.com/exam/telecom/api/products/new');
  }

}
