import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hidden = false;

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }
  // @ts-ignore
  formGroup: FormGroup;
  constructor(private authService:AuthServiceService) { }
  ngOnInit() {
    this.initForm();
  }
  initForm(){
    this.formGroup = new FormGroup({
      name:new FormControl('',[Validators.required]),
      password:new FormControl('',[Validators.required])
    });
  }
  registerProcess(){
    if(this.formGroup.valid){
      this.authService.login(this.formGroup.value).subscribe(result =>{
        if(result.success){
          console.log(result.message);
          alert(result.message);
        }else{
          alert(result.message);
        }
      })
    }
  }
}
