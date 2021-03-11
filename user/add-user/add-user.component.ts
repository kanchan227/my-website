import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from '../shared/user.model';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  user!: User[];
  private subscription!:Subscription;

   constructor(private  UserService:UserService,
    private router:Router)
   {}



    ngOnInit(): void {
      this.user=this.UserService.showuser();
      this.subscription=this.UserService.Userchange.subscribe((newUser:User[])=>{this.user=newUser});
  }
  onadduser(f:NgForm)
  {
    const Userdetails = new User(f.value.name,f.value.password,f.value.email,f.value.address);
    this.UserService.adduser(Userdetails);
    alert("data add sucessfully");
    console.log(Userdetails);

  }
  deleteUser(index:number){
    this.UserService.DeleteUser(index);
    alert("Record is deletesucessfully");

  }
  edituser(index:number){

  this.router.navigateByUrl('edit-user');
   this.router.navigate(['edit-user'],{queryParams:{id:index}})

  }

}
