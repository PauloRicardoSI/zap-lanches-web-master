import { Component, OnInit } from '@angular/core';

const ORDERS: any[] = [
  {client: 'Paulo Ricardo Barbosa', email: 'paulo.ricardo.0306@gmail.com', adress: 'Rua C, 237', phone: '3255-5467', profile: 'ADM'},
  {client: 'Paulo Ricardo Aguiar', email: '', adress: '', phone: '', profile: ''},
  {client: 'João Paulo', email: 'joao@gmail.com', adress: '', phone: '', profile: ''},
  {client: 'Bernardo', email: '', adress: '', phone: '', profile: ''}
]

@Component({
  selector: 'app-editusers',
  templateUrl: './editusers.component.html',
  styleUrls: ['./editusers.component.scss']
})
export class EditusersComponent implements OnInit {

  orders: any[] = ORDERS;
  constructor() { }

  ngOnInit() {
  }

}
