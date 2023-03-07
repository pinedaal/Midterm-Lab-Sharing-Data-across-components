import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor() {}

  employee = [
    {
      id: 101,
      firstname: 'Freddie',
      lastname: 'Baker',
      email: 'fbaker@gmail.com',
    },
    {
      id: 102,
      firstname: 'Donna',
      lastname: 'Autumn',
      email: 'dautumn@yahoo.com',
    },
    {
      id: 103,
      firstname: 'Johnny',
      lastname: 'Bravo',
      email: 'jbravo@gmail.com',
    },
    {
      id: 104,
      firstname: 'Antonella',
      lastname: 'Pineda',
      email: 'apineda@gmail.com',
    },
  ];
}
