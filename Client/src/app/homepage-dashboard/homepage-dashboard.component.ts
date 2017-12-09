import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { OrderModule } from 'ngx-order-pipe';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { ImgFolder } from '../imgfolder';
import { ImgFolderService } from '../img-folder.service';
import { RouterLink } from '@angular/router/src/directives/router_link';

@Component({
  selector: 'app-homepage-dashboard',
  templateUrl: './homepage-dashboard.component.html',
  styleUrls: ['./homepage-dashboard.component.css']
})
export class HomepageDashboardComponent implements OnInit {

  imgfolders: any;

  constructor(private imgfolderService: ImgFolderService,
    private location: Location,
    private cookieService: CookieService,
    private router: Router) { }
    
cookieExists: boolean = this.cookieService.check('auth');

  ngOnInit() {
    console.log(this.cookieExists);
    if(!this.cookieExists){
      this.router.navigate(['/login']);
    }
    this.getImgFolders();
  }

  getImgFolders(): void {
    this.imgfolderService.getImgFolders(true)
    .subscribe(data => {
       var returnObj: any;
       returnObj = data;
       console.log(returnObj);
       for(var i = 0; i < returnObj.length; i++){
         if(returnObj[i].dispute == true){
          returnObj.splice(i, 1);
         }
       }
       this.imgfolders = returnObj;
       console.log(this.imgfolders);
    });
  }

  imgFolderDetail(_id: string){
    this.router.navigate(['/detail/' + _id]);
  }
}
