import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { UserlistService } from '../user.list.service';

@Component({
  selector: 'app-alluser',
  templateUrl: './alluser.component.html',
  styleUrls: ['./alluser.component.css']
})
export class AlluserComponent implements OnInit {

  posts:any;
  
  constructor(private service:UserlistService) {}
  
  ngOnInit() {
      this.service.getPosts()
        .subscribe(response => {
          this.posts = response;
        });
  }
}