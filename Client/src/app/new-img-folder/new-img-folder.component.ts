import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ImgFolderService } from '../img-folder.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { CurrentUser } from '../user';
import { EditUserImgFoldersService } from '../edit-user-img-folders.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-new-img-folder',
  templateUrl: './new-img-folder.component.html',
  styleUrls: ['./new-img-folder.component.css']
})
export class NewImgFolderComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private imgfolderService: ImgFolderService,
    private location: Location,
    private cookieService: CookieService,
    private router: Router,
    private rateCookie: CookieService,
    private edituserimgfolderService: EditUserImgFoldersService
  ) {}

  ngOnInit() {
  }

  submitNew(name: string, privacy: boolean, descrip: string){
    if(name == null || descrip == null){
      alert("Please enter the correct information");
    }
    var owner: string;
    owner = this.cookieService.get('auth');
    this.edituserimgfolderService.newImgFolder(owner, name, privacy, descrip)
    .subscribe(data =>{
      var returnObj: any;
      returnObj = data;
      this.router.navigate(['/collections']);
    })
  }

}
