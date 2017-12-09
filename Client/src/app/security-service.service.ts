import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SecurityServiceService {

  constructor(private http: HttpClient) { }

  getSecurity(){
    return this.http.get('/lab5/security');
  }

  editSecurity( admin: string, secur: string, dmca: string){
    var body = { admin, secur, dmca };
    return this.http.put('/lab5/security', body);
  }

}
