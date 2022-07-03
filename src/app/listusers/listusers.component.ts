import { Component, OnInit } from '@angular/core';
export interface UserElement {
  email: string;
  id: number;
  first_name: string;
  last_name: string;
  picture:String;
}
const ELEMENT_DATA: UserElement[] = [
  {id: 1, email: 'lindsay.ferguson@reqres.in', first_name:'lindsay' , last_name: 'ferguson',picture:'assets/users/u1.jpg'},
  {id: 2, email: 'george.edwards@reqres.in', first_name: 'george', last_name: 'edwards',picture:'assets/users/u2.jpg'},
  {id: 3, email: 'tobias.funke@reqres.in', first_name: 'tobias', last_name: 'funke',picture:'assets/users/u3.jpg'},
  {id: 4, email: 'byron.fields@reqres.in', first_name: 'byron', last_name: 'fields',picture:'assets/users/u4.jpg'},
];
@Component({
  selector: 'app-listusers',
  templateUrl: './listusers.component.html',
  styleUrls: ['./listusers.component.css']
})
export class ListusersComponent implements OnInit {
  displayedColumns: string[] = ['id', 'email', 'first_name', 'last_name','picture'];
  dataSource = ELEMENT_DATA;
  clickedRows = new Set<UserElement>();
  constructor() { }

  ngOnInit(): void {
  }

}
