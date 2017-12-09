import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ImgSearchService {

  constructor(private http: HttpClient) { }

  imgSearch(searchTerm: string){
    return this.http.get('https://images-api.nasa.gov/search?q=' + searchTerm);
  }

}
