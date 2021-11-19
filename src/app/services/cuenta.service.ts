import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CuentaService {
  url = 'https://my-json-server.typicode.com/stebanjimenezg/test/db';


  constructor(private http: HttpClient) { }

  getCuentas(): Observable<any> {
    return this.http.get(this.url);
  }
}
