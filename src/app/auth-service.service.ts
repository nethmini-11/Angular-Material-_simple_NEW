import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http:HttpClient) { 
}

//end point integration for CREATE AND UPDATE
login(data: any):Observable<any>{
  return this.http.post(`${baseUrl}users`,data);
}
update(data: any):Observable<any>{
  return this.http.put(`${baseUrl}users/2`,data);
}
 


  }

 
 


