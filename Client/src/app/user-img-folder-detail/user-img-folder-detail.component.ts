import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { CookieService } from 'ngx-cookie-service';
import { CurrentUser } from '../user';

import { ImgFolder } from '../imgfolder';
import { ImgFolderService }  from '../img-folder.service';
import {Router} from '@angular/router';
import { EditUserImgFoldersService } from '../edit-user-img-folders.service';

@Component({
  selector: 'app-user-img-folder-detail',
  templateUrl: './user-img-folder-detail.component.html',
  styleUrls: ['./user-img-folder-detail.component.css']
})
export class UserImgFolderDetailComponent implements OnInit {

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
    private edituserimgfolderService: EditUserImgFoldersService
  ) {}

  cookieExists: boolean = this.cookieService.check('auth');
  value: string;
  values: string[];

  ngOnInit() {
    console.log(this.cookieExists);
    this.value = location.pathname;
    this.values = this.value.split("/");
    this.value = this.values[2];
    console.log(this.cookieService.get('auth'));

    console.log(this.rateCookie.get('rate'))
  
    this.getImgFolder(this.value);
  }

  getImgFolder(_id: string): void {
    this.imgfolderService.getImgFolder(_id)
    .subscribe(data => {
      var returnObj: any;
      returnObj = data;
      this.thisfolder = returnObj;
      this.images= this.thisfolder.images;
    });
  }

  editImgFolder(id: string, name: string, descrip: string, isPrivate: boolean){
    this.edituserimgfolderService.editImgFolder(id, name, descrip, isPrivate)
    .subscribe(data =>{
        var returnObj: any;
        returnObj = data;
        this.thisfolder = returnObj;
        this.router.navigate(['/collections'])
    })
  }

  removeImage(_id: string, url: string){
    this.edituserimgfolderService.removeImage(_id, url)
    .subscribe(data =>{
      var returnObj: any;
      returnObj = data;
      this.thisfolder = returnObj;
      window.location.reload();
    })
  }

  logOut(){
    console.log(this.user.email);
    this.cookieService.delete('auth');
    this.cookieService.deleteAll();
    this.router.navigate(['/login']);
  }

}
