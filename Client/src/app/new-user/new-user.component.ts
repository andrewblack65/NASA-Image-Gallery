import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { EmailValidator } from '@angular/forms';

import { NewUserService } from '../new-user.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  constructor(private newuserservice: NewUserService, 
              private router: Router,
              private cookieService: CookieService) { }

  ngOnInit() {
  }

  signUp(email: string, password: string){
    if(email == null || !email.includes('@') || !email.includes('.com')){
      alert("Please enter a valid email");
      return;
    }
    if(password.length < 6 || password == null){
      alert("Please enter a proper password")
      return;
    }
    var returnObj: any;
    this.newuserservice.signUp(email, password)
      .subscribe(data => {
          console.log(data);
          returnObj = data;
          if(returnObj.message == "User exists"){
            alert("User already exists");
            return;
          }
          if(returnObj.message = "User saved"){
            this.cookieService.set('auth', email);
            this.router.navigate(['/homepage']);
          }
          else{
            alert("There was an error");
          }
      }
    );
  }
}
