import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-header3',
  templateUrl: './header3.component.html',
  styleUrls: ['./header3.component.css']
})
export class Header3Component implements OnInit {
  public employees = [];
  constructor(private employeeservice: EmployeeService) { }
  ngOnInit() {
     this.employees = this.employeeservice.getEmployee(); }

}
