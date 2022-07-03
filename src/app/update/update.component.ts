import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthServiceService } from '../auth-service.service';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
// @ts-ignore
formGroup: FormGroup;
constructor(private authService:AuthServiceService) { }
ngOnInit() {
  this.initForm();
}
initForm(){
  this.formGroup = new FormGroup({
    name:new FormControl('Nethmini',[Validators.required]),
    password:new FormControl('123456',[Validators.required])
  });
}
updateProcess(){
  if(this.formGroup.valid){
    this.authService.update(this.formGroup.value).subscribe(result =>{
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
