import { Component, OnInit } from '@angular/core';


const ORDERS: any[] = [
  {client: 'Paulo Ricardo Barbosa', email: 'paulo.ricardo.0306@gmail.com', adress: 'Rua C, 237', phone: '3255-5467', profile: 'ADM'}
]

@Component({
  selector: 'app-addusers',
  templateUrl: './addusers.component.html',
  styleUrls: ['./addusers.component.scss']
})
export class AddusersComponent implements OnInit {

  orders: any[] = ORDERS;
  constructor() { }

  ngOnInit() {
  }

}
