import {AfterViewInit, Component, OnChanges, OnInit} from '@angular/core';
import {Employee} from "../models/Employee";
import {HttpService} from "../http.service";

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employees: Employee[];
  imgUrl: string;

  constructor(private httpService: HttpService) {
    this.employees = [];
    this.imgUrl = `https://avatars.dicebear.com/api/male/${this.makeRandom()}.svg`;
  }


  ngOnInit(): void {
    this.showEmployees();
  }

   makeRandom(): String {
     let result = '';
     let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
     let charactersLength = characters.length;
     for (let i = 0; i < 5; i++) {
       result += characters.charAt(Math.floor(Math.random() *
         charactersLength));
     }
     return result;
   }

   showEmployees() {
   this.httpService.getEmployees()
      .subscribe(employee =>
        this.employees = employee);
   }

  removeEmployee(employee: Employee) {
    console.log(employee);
    this.httpService.removeEmployee(employee.id);
  }
}
