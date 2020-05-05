import { Component }  from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent {
  // properties
  firstName = 'John';
  lastName = 'Doe';
  age = 30;

  // Methods
  constructor(){
    this.sayHello()
    console.log(this.age);
    this.hasBirthday();
  }

  sayHello(){
    console.log(`hello ${this.firstName}`)
  }

  hasBirthday() {
    console.log(this.age += 1)
  }
}