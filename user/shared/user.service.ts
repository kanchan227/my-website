import { Injectable } from '@angular/core';
//import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { registor, User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userdb = new Subject<registor[]>();
  Userchange = new Subject<User[]>();
   private newUser:User[]=[
     new User('mark bhai','1244','mark@facebook.com','ropar')
   ];;

  constructor(private router:Router,private firedb:AngularFirestore,) { }

  loginauth = false;

  adduser(user:User){
    this.newUser.push(user);
    this.Userchange.next(this.newUser.slice());
  }
  showuser(){
    return this.newUser.slice();
  }
  //delete selected User

  DeleteUser(index:number){
     this.newUser.splice(index,1);
     this.Userchange.next(this.newUser.slice());

  }
  selecteduser(index:number){
    return this.newUser[index];

  }
  //update
  updateuser(index:number,updatevalue:User){
    this.newUser[index]=updatevalue;
    this.Userchange.next(this.newUser.slice());
  }
  /// login & block tabs
  login(username:string){

    this.setUser(username);
    this.router.navigate(['interns']);

  }
  setUser(username:string){
    localStorage.setItem('user',username);
  }
  getUser(){
    return localStorage.getItem('user');
  }
  removeUser(){
    localStorage.removeItem('user');
  }
  isauthen(){
   return localStorage.getItem('user')!=null;
  }
  onlogin()
  {
    this.loginauth=true;
  }
  //databse firbase

  adduserdb(value:registor){
    return this.firedb.collection('/registor').add({
      title:value.title,
      name:value.name,
      email:value.email,
      phone:value.phone,
      gender:value.gender,
      Password:value.Password,
      CPassword:value.CPassword



    });

    }
    // show datatbase deatils
    getalluserdb(){

     return this.firedb.collection('/registor').snapshotChanges();
  }

}
