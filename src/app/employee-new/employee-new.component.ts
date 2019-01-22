import { Component, OnInit } from '@angular/core';
import { EmployeeService, Employee } from '../employee.service';


@Component({
  selector: 'app-employee-new',
  templateUrl: './employee-new.component.html',
  styleUrls: ['./employee-new.component.css']
})
export class EmployeeNewComponent implements OnInit {

  employee: Employee = {
    name: '',
    salary: 0,
    bonus: 0
  };

  labelFields = {
    name: 'Nome do Funcionário',
    salary: 'Salário do Funcionário',
    bonus: 'Bonificação'
  };

  constructor(private employeeService: EmployeeService) {}

  ngOnInit() {
  }

  addEmployee(event) {
    const novaInstancia = Object.assign({}, this.employee);
    this.employeeService.addEmployee(novaInstancia);
  }

}
