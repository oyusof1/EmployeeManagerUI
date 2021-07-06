import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  url: string = "http://localhost:8080/api/v1/employee"

  constructor(private httpClient: HttpClient) {

  }

getEmployees() : Observable<any> {
    return this.httpClient.get(this.url);
  }
}
