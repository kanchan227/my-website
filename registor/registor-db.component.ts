import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user/shared/user.service';

@Component({
  selector: 'app-registor-db',
  templateUrl: './registor-db.component.html',
  styleUrls: ['./registor-db.component.css']
})
export class RegistorDbComponent implements OnInit {

  constructor(private userService:UserService) { }
  items:any=[];
  ngOnInit():void{
    this.userService.getalluserdb().subscribe(result=>{
      this.items=result;

    })

  }

  }
