import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  getEmployee() {
    return [
    {id: 1, name: 'sana', age: 21},
    {id: 2, name: 'arooj', age: 12},
    {id: 3, name: 'mishal', age: 21}
    ];
  }
  getnewdata() {
    return[
      {id: 1, name: 'sana', age: 21},
      {id: 2, name: 'arooj', age: 12},
    ];
  }
}
