import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { AdminDisputeService } from '../admin-dispute.service';
import { ImgFolder } from '../imgfolder';
import { ImgFolderService } from '../img-folder.service';

@Component({
  selector: 'app-admin-collections',
  templateUrl: './admin-collections.component.html',
  styleUrls: ['./admin-collections.component.css']
})
export class AdminCollectionsComponent implements OnInit {
  imgfolders: ImgFolder[];

  constructor(private cookieService: CookieService,
              private router: Router,
              private adminCollections: AdminDisputeService,
              private imgfolderService: ImgFolderService) { }

  
  ngOnInit() {
    if(this.cookieService.get('auth') != "admin@email.com"){
      this.router.navigate(['/homepage']);
      return;
    }
    this.getDisputes();
  }

  getDisputes(){
    this.adminCollections.getAdminCollections()
    .subscribe(data =>{
        var returnObj: any;
        returnObj = data;
        this.imgfolders = returnObj;
    })
  }

imgFolderDetailDispute(_id: string){
  this.router.navigate(['/detail/' + _id + '/dispute'])
  return;
}

  logOut(){
    this.cookieService.deleteAll();
    this.router.navigate(['/login']);
    return;
  }
}
