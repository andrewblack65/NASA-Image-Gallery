import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { SecurityServiceService } from '../security-service.service';
import { Security } from '../security';

@Component({
  selector: 'app-admin-policy',
  templateUrl: './admin-policy.component.html',
  styleUrls: ['./admin-policy.component.css']
})
export class AdminPolicyComponent implements OnInit {

    security: Security;
  
    constructor(private router: Router,
                private cookieService: CookieService,
                private securityService: SecurityServiceService,
                private securityInfo: Security) { }
  
    cookieExists: boolean = this.cookieService.check('auth');
    amAdmin: string = this.cookieService.get('auth');
  
    ngOnInit() {
      if(this.amAdmin != "admin@email.com"){
        this.router.navigate(['policy']);
        return;
      }
      this.getSecurity();
    }
  
    getSecurity(){
      this.securityService.getSecurity()
        .subscribe(data =>{
            var returnObj: any;
            returnObj = data;
            this.security = returnObj;
        })
    }

    editSecurity( secur: string, dmca: string){
      var admin: string = this.cookieService.get('auth');
      this.securityService.editSecurity( admin, secur, dmca)
        .subscribe(data =>{
          var returnObj: any;
          returnObj = data;
          this.router.navigate(['policy/admin']);
          return;
        })
    }
  
    back(){
      if(this.amAdmin == "admin@email.com"){
        this.router.navigate(['/collections/admin']);
        return;
      }
      if(this.cookieExists){
        this.router.navigate(['/homepage']);
        return;
      }
      this.router.navigate(['/login']);
      return;
    }

}
