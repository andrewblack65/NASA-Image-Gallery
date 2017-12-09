import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AdminDisputeService {

  constructor(private http: HttpClient) { }

  getAdminCollections(){
    return this.http.get('/lab5/collection/dispute');
  }

  getLogInformation(_id: string){
    var body = { _id };
    return this.http.post('/lab5/loginfo', body);
  }

  resolveDispute( _id: string){
    var body = { _id };
    return this.http.put('/lab5/loginfo', body);
  }

}
