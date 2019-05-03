import { Component, OnInit } from '@angular/core';

const ORDERS: any[] = [
  {id: 1, situation: 'Reservada', client: 'Paulo Ricardo Barbosa', time: '', category: 'on-line'},
  {id: 2, situation: 'Reservada', client: 'Paulo Ricardo Aguiar', time: '', category: 'on-line'},
  {id: 3, situation: 'Disponível', client: '', time: '', category: 'MESA'},
  {id: 4, situation: 'ocupada', client: 'Bernardo', time: '12/04/2019 18:00:20', category: 'MESA'}
]

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  orders: any[] = ORDERS;

  constructor() { }

  ngOnInit() {
  }

}
