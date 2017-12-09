import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

import { ImgFolder } from '../imgfolder';
import { ImgFolderService } from '../img-folder.service';
import { CurrentUser } from '../user';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  imgfolders: ImgFolder[];
  
   constructor(private imgfolderService: ImgFolderService, 
               private router: Router,
               private cookieService: CookieService
              ) { }
  
   cookieExists: boolean = this.cookieService.check('auth');

   ngOnInit() {
    console.log(this.cookieExists);
    if(!this.cookieExists){
      this.router.navigate(['/login']);
    }
   }

   logOut(){
     console.log(this.cookieService.getAll())
     this.cookieService.deleteAll();
     this.router.navigate(['/login']);
   }
}
