import { Component, OnInit } from '@angular/core';

const ORDERS: any[] = [
  {id: 1, situation: 'Reservada', client: 'Paulo Ricardo Barbosa', time: '', category: 'on-line'},
  {id: 2, situation: 'Reservada', client: 'Paulo Ricardo Aguiar', time: '', category: 'on-line'},
  {id: 3, situation: 'Disponível', client: '', time: '', category: 'MESA'},
  {id: 4, situation: 'ocupada', client: 'Bernardo', time: '12/04/2019 18:00:20', category: 'MESA'}
]

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements OnInit {

  orders: any[] = ORDERS;
  
  constructor() { }

  ngOnInit() {
  }

}
