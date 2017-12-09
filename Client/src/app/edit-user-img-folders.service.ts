import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class EditUserImgFoldersService {

  constructor(private http: HttpClient) { }

  editImgFolder( id: string, name: string, descrip: string, isPrivate: boolean){
    var body = { id, name, descrip, isPrivate }
    return this.http.put('/lab5/collection/edit', body);
  }

  addImage( _id: string, image: string){
    var body = { _id, image }
    return this.http.put('/lab5/collection/edit/addimg', body);
  }

  removeImage( _id: string, image: string){
    var body = { _id, image }
    return this.http.put('/lab5/collection/edit/rmvimg', body);
  }

  deleteImgFolder(_id: string){
    var body = { _id }
    return this.http.post('/lab5/collection/edit/delete', body);
  }

  newImgFolder(owner: string, name: string, isPrivate: boolean, descrip: string){
    var body = { owner, name, isPrivate, descrip };
    return this.http.post('/lab5/collection', body);
  }

}
