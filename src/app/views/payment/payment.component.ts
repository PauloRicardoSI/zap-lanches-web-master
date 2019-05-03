import { Component, OnInit } from '@angular/core';

const ORDERS: any[] = [
  {id: 1, client: 'Paulo Ricardo Barbosa', time: '12/04/2019 21:08:54', demand: 'DELIVERY'},
  {id: 2, client: 'Paulo Ricardo Aguiar', time: '12/04/2019 19:08:54', demand: 'DELIVERY'}
]

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  orders: any[] = ORDERS;

  constructor() { }

  ngOnInit() {
  }

}
