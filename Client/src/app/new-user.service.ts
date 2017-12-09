import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class NewUserService {

  constructor(private http: HttpClient) { }
  signUp(email: string, password: string){
    var body = {email: email, password: password};
    return this.http.post( '/lab5/signup', body);
  }
}
