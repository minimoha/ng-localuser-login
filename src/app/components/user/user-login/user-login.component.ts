import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  signupUsers: any[] = [];
  signupObj: any = {
    username: '',
    email: '',
    password: ''
  }

  loginObject: any = {
    username: '',
    password: ''
  }


  constructor() { }

  ngOnInit(): void {
    const localData = localStorage.getItem('signupUsers');
    if(localData != null){
      this.signupUsers = JSON.parse(localData);
    }
  }

  onSignUp(){
    console.log(this.signupObj);
    this.signupUsers.push(this.signupObj);
    console.log(this.signupUsers);
    localStorage.setItem('signupUsers', JSON.stringify(this.signupUsers));
    this.signupObj = {
      username: '',
      email: '',
      password: ''
    }
  }

  onLogin(){
    debugger
    const isUserExist = this.signupUsers.find(m => m.username == this.loginObject.username &&
      m.password == this.loginObject.password)
      if (isUserExist != undefined) {
        alert('User logged in successfully!')
      } else {
        alert('Wrong credentials!')
      }
  }

}
