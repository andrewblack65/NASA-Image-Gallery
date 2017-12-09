import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { SecurityServiceService } from '../security-service.service';
import { Security } from '../security';

@Component({
  selector: 'app-security-privacy-policy',
  templateUrl: './security-privacy-policy.component.html',
  styleUrls: ['./security-privacy-policy.component.css']
})
export class SecurityPrivacyPolicyComponent implements OnInit {

  security: Security;

  constructor(private router: Router,
              private cookieService: CookieService,
              private securityService: SecurityServiceService,
              private securityInfo: Security) { }

  cookieExists: boolean = this.cookieService.check('auth');
  amAdmin: string = this.cookieService.get('auth');

  ngOnInit() {
    if(this.amAdmin == "admin@email.com"){
      this.router.navigate(['policy/admin']);
    }
    this.getSecurity();
  }

  getSecurity(){
    this.securityService.getSecurity()
      .subscribe(data =>{
          var returnObj: any;
          returnObj = data;
          console.log(returnObj);
          this.security = returnObj;
      })
  }

  back(){
    if(this.cookieExists){
      this.router.navigate(['/homepage']);
      return;
    }
    this.router.navigate(['/login']);
  }

}
