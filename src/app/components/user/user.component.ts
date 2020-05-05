import { Component, OnInit }  from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent {
  // properties
  firstName: string;
  lastName: string;
  age:number;
  address;

  // Methods
  constructor(){
    this.firstName = 'Oluwatobi',
    this.lastName = 'Fatumo'
    this.age = 30;
    this.address = {
    street: '50 main st',
    city: 'Boston',
    state: 'MA'
  }
  }

  showAge(){
    return this.age + 5
  }
}