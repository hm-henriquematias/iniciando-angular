import { Injectable } from '@angular/core';

export interface Employee {
  name: string;
  salary: number;
  bonus: number;
}

@Injectable({
  providedIn: 'root'
})

export class EmployeeService {

  employees: Employee[] = [];

  constructor() {}

  addEmployee(instancia) {
    this.employees.push({name: instancia.name, salary: instancia.salary, bonus: this.calculaBonus(instancia)});
    console.log(this.employees);
  }

  calculaBonus(instancia) {
    const bonusParam = { maximoParaBonus: 1000, valorMinimo: 0 };
    return <number> instancia.salary >= bonusParam.maximoParaBonus ? bonusParam.valorMinimo : instancia.bonus;
  }
}
