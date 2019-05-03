import { Component, OnInit } from '@angular/core';


const ORDER: any[] = [
  {name: '', describle: '', value: '', category: ''},
]

@Component({
  selector: 'app-addcategory',
  templateUrl: './addcategory.component.html',
  styleUrls: ['./addcategory.component.scss']
})
export class AddcategoryComponent implements OnInit {

  orders: any[] = ORDER;

  constructor() { }

  ngOnInit() {
  }

}
