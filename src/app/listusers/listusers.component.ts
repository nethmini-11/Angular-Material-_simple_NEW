import { Component, OnInit } from '@angular/core';
export interface PeriodicElement {
  email: string;
  id: number;
  first_name: string;
  last_name: string;
  picture:String;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, email: 'michael.lawson@reqres.in', first_name:'Hydrogen' , last_name: 'H',picture:`https://reqres.in/img/faces/7-image.jpg`},
  {id: 2, email: 'lindsay.ferguson@reqres.in', first_name: 'Hydrogen', last_name: 'He',picture:`https://reqres.in/img/faces/7-image.jpg`},
  {id: 3, email: 'Lithium', first_name: 'Hydrogen', last_name: 'Li',picture:`https://reqres.in/img/faces/7-image.jpg`},
  {id: 4, email: 'Beryllium', first_name: 'Hydrogen', last_name: 'Be',picture:`https://reqres.in/img/faces/7-image.jpg`},
];
@Component({
  selector: 'app-listusers',
  templateUrl: './listusers.component.html',
  styleUrls: ['./listusers.component.css']
})
export class ListusersComponent implements OnInit {
  displayedColumns: string[] = ['id', 'email', 'first_name', 'last_name','picture'];
  dataSource = ELEMENT_DATA;
  clickedRows = new Set<PeriodicElement>();
  constructor() { }

  ngOnInit(): void {
  }

}
