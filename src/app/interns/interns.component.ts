import { Component, OnInit,Output ,EventEmitter} from '@angular/core';
import { UserService } from '../user/shared/user.service';

@Component({
  selector: 'app-interns',
  templateUrl: './interns.component.html',
  styleUrls: ['./interns.component.css']
})
export class InternsComponent implements OnInit {

  constructor(private userService:UserService) { }
  ngOnInit(){
    console.log(this.userService.getUser());

  }
  User='';
  message='';
  @Output() newpost=new EventEmitter();
   addmessage(){
   const Post = {User:this.User,message:this.message};
   console.dir(Post);
   this.newpost.emit(Post);

}

}
