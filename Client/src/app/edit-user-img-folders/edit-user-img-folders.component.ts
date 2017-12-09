import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

import { ImgFolder } from '../imgfolder';
import { ImgFolderService } from '../img-folder.service';
import { EditUserImgFoldersService } from '../edit-user-img-folders.service';

@Component({
  selector: 'app-edit-user-img-folders',
  templateUrl: './edit-user-img-folders.component.html',
  styleUrls: ['./edit-user-img-folders.component.css']
})
export class EditUserImgFoldersComponent implements OnInit {
  imgfolders: ImgFolder[];
  
    constructor(private imgfolderService: ImgFolderService,
                private cookieService: CookieService,
                private router: Router,
                private editimgfolderService: EditUserImgFoldersService) { }
  
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
    console.log(owner);
    this.imgfolderService.getOwnerImgFolders(owner)
    .subscribe(data => {
      console.log(data);
      var returnObj: any;
      returnObj = data;
      console.log(this.imgfolders);
      this.imgfolders = returnObj;
    });
  }

  imgFolderDetail(name: string){
    this.router.navigate(['/detail/' + name]);
  }

  deleteImgFolder(_id: string){
    if(confirm("Are you sure you want to delete")){
      this.editimgfolderService.deleteImgFolder(_id)
      .subscribe(data => {
        var returnObj: any;
        returnObj = data;
        this.router.navigate(['/collections']);
        return;
      })
    }
    else{
      this.router.navigate(['/collections']);
      return;
    }
  }
}
