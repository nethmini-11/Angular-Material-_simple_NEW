import { Component, OnInit } from '@angular/core';

import {UserlistService} from '../user.list.service';
@Component({
  selector: 'app-userdatalist',
  templateUrl: './userdatalist.component.html',
  styleUrls: ['./userdatalist.component.css']
})
export class UserdatalistComponent implements OnInit {
  user$: void | undefined;
  constructor(private UserlistService:UserdatalistComponent) { }
alluser(){
  this.UserlistService.alluser();
}
  ngOnInit(): void {
  }

}
