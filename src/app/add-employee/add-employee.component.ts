import { Component, OnInit } from '@angular/core';
import {HttpService} from "../http.service";
import {Employee} from "../models/Employee";
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  addEmployeeForm: FormGroup;

  constructor(
    private httpService : HttpService,
    public formBuilder: FormBuilder) {

    this.addEmployeeForm = this.formBuilder.group({
      name: [''],
      email: [''],
      position: ['']
    });
  }

  ngOnInit(): void {
  }

  onSubmit() :void {
    let formData: any = new FormData();
    // @ts-ignore
    formData.append("name", this.addEmployeeForm.get('name').value);
    // @ts-ignore
    formData.append("email", this.addEmployeeForm.get('email').value);
    // @ts-ignore
    formData.append("position", this.addEmployeeForm.get('position').value);

    this.httpService.addEmployee(this.addEmployeeForm.value);
    console.log(this.addEmployeeForm.value);
    this.addEmployeeForm.reset();

  }
}
