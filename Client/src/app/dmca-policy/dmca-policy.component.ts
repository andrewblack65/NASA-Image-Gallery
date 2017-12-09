import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-dmca-policy',
  templateUrl: './dmca-policy.component.html',
  styleUrls: ['./dmca-policy.component.css']
})
export class DmcaPolicyComponent implements OnInit {

  constructor(private router: Router,
              private cookieService: CookieService
  ) { }

  cookieExists: boolean = this.cookieService.check('auth');

  ngOnInit() {
  }


  back(){
    if(this.cookieExists){
      this.router.navigate(['/homepage']);
      return;
    }
    this.router.navigate(['/login']);
  }
}
