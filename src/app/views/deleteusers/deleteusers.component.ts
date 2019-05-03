import { Component, OnInit } from '@angular/core';

const ORDERS: any[] = [
  {client: 'Paulo Ricardo Barbosa', email: 'paulo.ricardo.0306@gmail.com', adress: 'Rua C, 237', phone: '3255-5467', profile: 'ADM'}
]

@Component({
  selector: 'app-deleteusers',
  templateUrl: './deleteusers.component.html',
  styleUrls: ['./deleteusers.component.scss']
})
export class DeleteusersComponent implements OnInit {

  orders: any[] = ORDERS;
  constructor() { }

  ngOnInit() {
  }

}
