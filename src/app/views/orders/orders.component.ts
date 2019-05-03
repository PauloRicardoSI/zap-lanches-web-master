import { Component, OnInit } from '@angular/core';

const ORDERS: any[] = [
  {type: 1, product: 'Pizza', client: 'Paulo Ricardo Barbosa', time: '12/04/2019 21:08:54', action: 'DELIVERY'},
  {type: 2, product: 'Hamburger', client: 'Paulo Ricardo Aguiar', time: '12/04/2019 19:08:54', action: 'DELIVERY'},
  {type: 1, product: 'Pizza', client: 'João Paulo', time: '12/04/2019 18:02:01', action: 'MESA'},
  {type: 1, product: 'Pizza', client: 'Bernardo', time: '12/04/2019 18:00:20', action: 'MESA'}
]

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  orders: any[] = ORDERS;

  constructor() { }

  ngOnInit() {
  }

}
