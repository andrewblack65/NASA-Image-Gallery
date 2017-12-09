import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { CookieService } from 'ngx-cookie-service';
import { CurrentUser } from '../user';

import { ImgFolder } from '../imgfolder';
import { ImgFolderService }  from '../img-folder.service';
import {Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-img-folder-detail',
  templateUrl: './img-folder-detail.component.html',
  styleUrls: ['./img-folder-detail.component.css']
})
export class ImgFolderDetailComponent implements OnInit {
  @Input() imgfolder: ImgFolder;

  thisfolder: ImgFolder;
  images: String[];

  constructor(
    private route: ActivatedRoute,
    private imgfolderService: ImgFolderService,
    private location: Location,
    private cookieService: CookieService,
    private router: Router,
    private user: CurrentUser,
    private rateCookie: CookieService,
    private reportCookie: CookieService,
    private http: HttpClient
  ) {}

  cookieExists: boolean = this.cookieService.check('auth');
  imgRate: boolean = this.rateCookie.check('rate');
  value: string;
  values: string[];

  ngOnInit() {
    this.value = location.pathname;
    this.values = this.value.split("/");
    this.value = this.values[2];
    this.rateCookie.set('rate', 'no');
    
    this.getImgFolder(this.value);
  }
  nOnDestroy(){
    this.rateCookie.delete('rate');
  }

  owner = this.cookieService.get('auth');

  getImgFolder(name: string): void {
    this.imgfolderService.getImgFolder(name).subscribe(data => {
      var returnObj: any;
      returnObj = data;
      if(returnObj.owner == this.cookieService.get('auth')){
          this.router.navigate(['/detail/' + name + '/owner']);
          return;
      }
      this.thisfolder = returnObj;
      this.images = returnObj.images;
    });
  }

  logOut(){
    this.cookieService.deleteAll();
    this.router.navigate(['/login']);
    return;
  }

  rate(_id: string){
    if(!this.cookieExists){
      return;
    }
    if(this.rateCookie.get('rate') == 'no'){
      this.rateCookie.set('rate', 'yes')
      this.imgfolderService.rateImgFolder(_id).subscribe(data =>{
        var returnObj: any;
        returnObj = data;
        this.thisfolder = returnObj;
    });
    return;
    }
    if(this.rateCookie.get('rate') == 'yes'){
      this.rateCookie.set('rate', 'no')
      this.imgfolderService.unrateImgFolder(_id).subscribe(data =>{
      var returnObj: any;
      returnObj = data;
      this.thisfolder = returnObj;
    });
    return;
    }
  }

  reportImgFolder(_id: string, reason: string){
    if(!this.cookieExists){
      return;
    }
       this.imgfolderService.reportImgFolder(_id, reason)
       .subscribe(data =>{
           var returnObj: any = data;
           console.log(data);
           return;
       })
  }

}
