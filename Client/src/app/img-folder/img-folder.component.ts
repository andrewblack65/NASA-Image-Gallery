import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

import { ImgFolder } from '../imgfolder';
import { ImgFolderService } from '../img-folder.service';

@Component({
  selector: 'app-img-folder',
  templateUrl: './img-folder.component.html',
  styleUrls: ['./img-folder.component.css']
})
export class ImgFolderComponent implements OnInit {
  
  imgfolders: ImgFolder[];

  constructor(private imgfolderService: ImgFolderService,
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

  getImgFolders(): void{
    imgfolders => this.imgfolderService.getImgFolders(true)
    .subscribe(data => {
      var obj: any;
      obj = data;
    });
  }

  logOut(){
    this.cookieService.delete('auth');
    this.router.navigate(['/login']);
  }
}
