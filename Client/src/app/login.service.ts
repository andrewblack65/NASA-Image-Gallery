import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LoginService {

  constructor(private http: HttpClient) { }
  login(email: string, password: string){
    var body = {email: email, password: password};
    return this.http.post( '/lab5/signin', body);
  }
}
