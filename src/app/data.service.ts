import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  _url = '../../assets/form.json';
  constructor(private httpService: HttpClient) { }
  getData() {
    return this.httpService.get('../../assets/form.json');
    // return this._http.post<any>(this._url, user);
  }
}
