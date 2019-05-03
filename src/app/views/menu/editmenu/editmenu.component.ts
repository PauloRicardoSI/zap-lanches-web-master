import { Component, OnInit } from '@angular/core';

const ORDER: any[] = [
  {name: 'Pizza Mussarela', describle: 'Queijo mussarela e borda fina', value: 'R$ 25,00', category: 'DELIVERY'},
]

@Component({
  selector: 'app-editmenu',
  templateUrl: './editmenu.component.html',
  styleUrls: ['./editmenu.component.scss']
})
export class EditmenuComponent implements OnInit {

  orders: any[] = ORDER;

  constructor() { }

  ngOnInit() {
  }

}
