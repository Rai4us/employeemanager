import {Component, OnInit} from '@angular/core';
import {Employee} from "./employee";
import {EmployeeService} from "./employee.service";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'employeemanagerapp';

  public employees: Employee[] | undefined;

  constructor(private employeeService: EmployeeService) {
  }

  public getEmployees(): void {
    this.employeeService.getEmployees().subscribe(
      (value: Employee[]) => {
        this.employees = value;
      },
      (error: HttpErrorResponse) => {
        alert(error.message)
      }
    )
  }

  ngOnInit(): void {
    this.getEmployees();
  }
}
