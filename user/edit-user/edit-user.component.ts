import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {User} from '../shared/user.model';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {


  constructor(private activated:ActivatedRoute,
    private userService:UserService,
    private router:Router) { }
   index!:number;
   edituser!:User;

   @ViewChild('updateform',{static:false})
   newform!:NgForm;


  ngOnInit() {
    this.activated.queryParams.subscribe(params=>{
      this.index=params['id'];

    });
    this.edituser = this.userService.selecteduser(this.index);
    console.log(this.edituser);

    setTimeout(() => {
      this.newform.form.patchValue({
          name: this.edituser.name,
         email: this.edituser.email,
         password: this.edituser.password,
         address: this.edituser.address
        });
    },);



  }
  onedituser(form:NgForm)
  {

   const updateuser = new User(form.value.name,form.value.password,form.value.email,form.value.address);
   this.userService.updateuser (this.index,updateuser);
   console.log(updateuser);
   alert("form is updated");
   this.router.navigateByUrl('add-user');
  }

}
