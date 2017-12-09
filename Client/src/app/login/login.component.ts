import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { CurrentUser } from '../user';

import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  authStatus = 'unauth';
  cookieVal = 'UNKNOWN';
  constructor(private router: Router, 
              private loginService: LoginService,
              private cookieService: CookieService,
              private user: CurrentUser) { }


  
  ngOnInit() {
    this.cookieService.set(this.authStatus, this.cookieVal);
  }

  login(email: string, password:string){
    this.loginService.login(email, password)
     .subscribe(data =>{
      console.log(data);
      var returnObj: any;
      returnObj = data;
      if(returnObj.success == true){
        this.authStatus = 'auth';
        // this.cookieService.set(this.authStatus, email);
        this.cookieService.set('auth', email)
        if(this.cookieService.get('auth') == 'admin@email.com'){
          console.log('here');
          this.router.navigate(['/collections/admin'])
          return;
        }
        this.router.navigate(['/homepage']);
        this.user.email = email;
      }
      else{
        if(returnObj.message == "User does not exist"){
          alert("User does not exist");
        }
        if(returnObj.message == "Invalid Password"){
          alert("Invalid password");
        }
      }
     }); 
    

  }

  signUp(){
    this.router.navigate(['/newuser']);
  }

}
