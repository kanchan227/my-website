import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EMPTY } from 'rxjs';
import { UserService } from '../user/shared/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService:UserService) { }
Users:any=[];

  ngOnInit(): void {
  }
  onlogin(f:NgForm){
    this.userService.login(f.value.username);
    this.userService.onlogin();
  }


}
