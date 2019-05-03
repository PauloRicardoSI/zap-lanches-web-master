import { Component, OnInit } from '@angular/core';

const ORDERS: any[] = [
  {name: 'Pizza Mussarela', describle: 'Queijo mussarela e borda fina', value: 'R$ 25,00', category: 'DELIVERY'},
]

@Component({
  selector: 'app-deletemenu',
  templateUrl: './deletemenu.component.html',
  styleUrls: ['./deletemenu.component.scss']
})
export class DeletemenuComponent implements OnInit {

  orders: any[] = ORDERS;

  constructor() { }

  ngOnInit() {
  }

}
