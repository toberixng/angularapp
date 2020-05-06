import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[]

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
  }

}
