import { Component }  from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent {
  // properties
  firstName = 'Oluwatobi';
  lastName = 'Fatumo';
  age = 30;
  address = {
    street: '50 main st',
    city: 'Boston',
    state: 'MA'
  }

  // Methods
  constructor(){
    this.showAge()
  }

  showAge(){
    return this.age + 5
  }
}