import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { ImgFolder } from './imgfolder';
import { MessageService } from './message.service';

@Injectable()
export class ImgFolderService {

  constructor( private messageService: MessageService,
               private http: HttpClient,
               private cookieService: CookieService,
               private rateCookie: CookieService) { }

  cookieExists: boolean = this.cookieService.check('auth');
  reportExists: boolean = this.cookieService.check('report');

  onInit(){
  }

  getImgFolders(isPrivate: boolean) {
    if(!isPrivate){
      return this.http.get('/lab5/collection');
    }
    if(isPrivate){
      return this.http.get('/lab5/specificcollection');
    }
  }

  getOwnerImgFolders(owner: string) {
    var body = { owner };
    return this.http.post('/lab5/collection/owner', body);
  }

  getImgFolder( _id: string){
    var body = { _id }
    return this.http.post('/lab5/specificcollection', body);
  }

  rateImgFolder(_id: string){
    if(this.cookieExists){
      var body = { _id };
      return this.http.put('/lab5/specificcollection/rate', body);
    }
  }

  unrateImgFolder(_id: string){
    if(this.cookieExists){
      var body = { _id };
      return this.http.put('/lab5/specificcollection/unrate', body);
    }
  }

  reportImgFolder(_id: string, reason: string){
    var reportBy: string = this.cookieService.get('auth');
    var body = { _id, reportBy , reason};
     return this.http.put('/lab5/collection/dispute', body);
    
  }
}
