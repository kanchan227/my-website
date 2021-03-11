import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { registor } from '../user/shared/user.model';
import { UserService } from '../user/shared/user.service';

@Component({
  selector: 'app-registor',
  templateUrl: './registor.component.html',
  styleUrls: ['./registor.component.css']
})

export class RegistorComponent {

  registerForm!:FormGroup
  submitted=false
  registors:any=[];
  constructor(private userService:UserService,private router:Router) { }

  onReset()
  {
    this.submitted=false;
    this.registerForm.reset();
  }
  show(form:{value:registor;}){
  console.log(form.value);
   this.userService.adduserdb(form.value).then(res =>{
    alert("new user created");
    this.router.navigate(['/registor-db']);
  },
  err =>{
    alert('error in creating new user');
  });

}
}


