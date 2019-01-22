import { Component, OnInit } from '@angular/core';
import { EmployeeService, Employee } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  constructor(public employeeService: EmployeeService) {}

  ngOnInit() {
  }

  getSalaryColor(employee) {
    const colorValues = { expensive: 2000, cheap: 1000 };
    return {'salary-expensive': employee.salary > colorValues.expensive, 'salary-cheap': employee.salary < colorValues.cheap};
  }
}
