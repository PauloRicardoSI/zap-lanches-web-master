import { Component, OnInit } from '@angular/core';

const ORDERS: any[] = [
  {client: 'Paulo Ricardo Barbosa', email: 'paulo.ricardo.0306@gmail.com', adress: 'Rua C, 237', phone: '3255-5467', profile: 'Administrador'}
]

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  orders: any[] = ORDERS;

  constructor() { }

  ngOnInit() {
  }

}
