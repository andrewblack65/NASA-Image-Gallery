import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { ImgFolder } from '../imgfolder';
import { ImgFolderService } from '../img-folder.service';
import { AdminDisputeService } from '../admin-dispute.service';

@Component({
  selector: 'app-admin-img-detail',
  templateUrl: './admin-img-detail.component.html',
  styleUrls: ['./admin-img-detail.component.css']
})
export class AdminImgDetailComponent implements OnInit {

  thisfolder: ImgFolder;
  log: any;
  images: String[];

  constructor(private cookieService: CookieService,
              private router: Router,
              private imgfolderService: ImgFolderService,
              private admindisputeService: AdminDisputeService) { }

  value: string;
  values: string[];
  ngOnInit() {
    this.value = location.pathname;
    this.values = this.value.split("/");
    this.value = this.values[2];

    if(this.cookieService.get('auth') != "admin@email.com"){
      this.router.navigate(['/homepage']);
      return;
    }

    this.getImgFolder(this.value);
    this.getLogInfo(this.value);
  }

  getImgFolder(name: string): void {
    this.imgfolderService.getImgFolder(name).subscribe(data => {
      var returnObj: any;
      returnObj = data;
      console.log(returnObj);
      this.thisfolder = returnObj;
      this.images = returnObj.images;
    });
  }

  getLogInfo(_id: string){
    this.admindisputeService.getLogInformation(_id)
    .subscribe(data =>{
      var returnObj: any;
      returnObj = data;
      var date = returnObj.date.split('T');
      returnObj.date = date[0];
      this.log = returnObj;
    })
  }

  resolveDispute(_id: string){
    this.admindisputeService.resolveDispute(_id)
    .subscribe(data =>{
      this.router.navigate(['/collections/admin']);
      return;
    })
  }

}
