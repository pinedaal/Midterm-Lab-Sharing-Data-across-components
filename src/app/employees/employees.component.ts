import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';
@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
})
export class EmployeesComponent implements OnInit {
  constructor(private employeeService: EmployeeService) {}
  employees: any;

  ngOnInit() {
    this.employees = this.employeeService.employee;
  }
}
