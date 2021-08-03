import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Observable} from "rxjs";
import {Employee} from "./models/Employee";

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


  addEmployee(employee: any): void {
    this.httpClient.post(this.url, employee).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    );
  }

  removeEmployee(employeeId: number) {
    this.httpClient.delete(`${this.url}/${employeeId}`).subscribe(
      (response) => console.log(response),
      (error) => console.log(error));
  }
}
