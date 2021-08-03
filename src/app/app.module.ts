import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router'
import { AppComponent } from './app.component';
import { NavbarComponent} from './navbar/navbar.component';
import { EmployeeComponent } from './employee/employee.component';
import {HttpClientModule} from "@angular/common/http";
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import {InputTextModule} from "primeng/inputtext";
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { AddDialogComponent } from './dialog/add-dialog/add-dialog.component';
import {ReactiveFormsModule} from "@angular/forms";

const routes: Routes = [
  {path: '', component: EmployeeComponent },
  {path: 'add', component: AddEmployeeComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    EmployeeComponent,
    AddEmployeeComponent,
    AddDialogComponent,
  ],
    imports: [
        RouterModule.forRoot(routes),
        BrowserAnimationsModule,
        BrowserModule,
        HttpClientModule,
        InputTextModule,
        MatDialogModule,
        MatButtonModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
