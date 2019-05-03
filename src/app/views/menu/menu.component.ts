import { Component, OnInit } from '@angular/core';

const ORDER: any[] = [
  {name: 'Pizza Mussarela', describle: 'Queijo mussarela e borda fina', value: 'R$ 25,00', category: 'DELIVERY'},
  {name: 'Pizza Mussarela', describle: 'Queijo mussarela e borda fina', value: 'R$ 25,00', category: 'DELIVERY'},
  {name: 'Pizza Mussarela', describle: 'Queijo mussarela e borda fina', value: 'R$ 25,00', category: 'DELIVERY'},
  {name: 'Pizza Mussarela', describle: 'Queijo mussarela e borda fina', value: 'R$ 25,00', category: 'DELIVERY'},
  {name: 'Pizza Mussarela', describle: 'Queijo mussarela e borda fina', value: 'R$ 25,00', category: 'DELIVERY'}
]

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  orders: any[] = ORDER;

  constructor() { }

  ngOnInit() {
  }

}
