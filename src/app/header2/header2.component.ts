import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-header2',
  templateUrl: './header2.component.html',
  styleUrls: ['./header2.component.css']
})
export class Header2Component implements OnInit {
  public  employees = [];
  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
     this.employees = this.employeeService.getEmployee();  }

}
