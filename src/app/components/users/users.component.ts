import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
<<<<<<< HEAD
  users: User[]
  showExtended: boolean = true
  loades: boolean = true

  constructor() { }

  ngOnInit(){
    this.users = [
      {
        firstName: 'Oluwatobi',
        lastName:  'Fatumo',
        age: 30,
        address: {
          street: '50 main st',
          city: 'Boston',
          state: 'MA'
        }
      },
      {
        firstName: 'Chioma',
        lastName:  'Umeibe',
        age: 32,
        address: {
          street: '50 Canal Estate st',
          city: 'Cele Ago',
          state: 'AN'
        }
      },
      {
        firstName: 'Abiola',
        lastName:  'Sanni',
        age: 45,
        address: {
          street: '20 Governor Road Ikotun',
          city: 'Ikotun',
          state: 'OY'
        }
      }
    ]

    this.showExtended = false;

    // this.addUser({
    //   firstName: 'Olayiwola',
    //   lastName:  'Olayiwomolue',
    //   age: 25,
    //   address: {
    //     street: '10, Mobolaji Bank Anthony way',
    //     city: 'Ikotun',
    //     state: 'OY'
    //   }
    // })
=======

  constructor() { }

  ngOnInit(): void {
>>>>>>> parent of d0f8ad7... array created
  }

  addUser(user: User){
    this.users.push(user)
  }
}
