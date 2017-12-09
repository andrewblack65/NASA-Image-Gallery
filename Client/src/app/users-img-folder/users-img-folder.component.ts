import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

import { ImgFolder } from '../imgfolder';
import { ImgFolderService } from '../img-folder.service';
import { EditUserImgFoldersService } from '../edit-user-img-folders.service';

@Component({
  selector: 'app-users-img-folder',
  templateUrl: './users-img-folder.component.html',
  styleUrls: ['./users-img-folder.component.css']
})
export class UsersImgFolderComponent implements OnInit {

  imgfolders: any;
  
    constructor(private imgfolderService: ImgFolderService,
                private cookieService: CookieService,
                private router: Router) { }
  
    cookieExists: boolean = this.cookieService.check('auth');

    ngOnInit() {
      if(!this.cookieExists){
        this.router.navigate(['/login']);
      }
      var owner: string;
      owner = this.cookieService.get('auth');
      this.getOwnerImgFolders(owner);
    }

  getOwnerImgFolders(owner: string):void{
    this.imgfolderService.getOwnerImgFolders(owner)
    .subscribe(data => {
      var returnObj: any;
      returnObj = data;
      for(var i = 0; i < returnObj.length; i++){
        if(returnObj[i].dispute == true){
         returnObj.splice(i, 1);
        }
      }
      this.imgfolders = returnObj;
    });
  }

  imgFolderDetail(_id: string){
    this.router.navigate(['/detail/' + _id]);
  }


  logOut(){
    this.cookieService.delete('auth');
    this.router.navigate(['/login']);
  }
  
}
