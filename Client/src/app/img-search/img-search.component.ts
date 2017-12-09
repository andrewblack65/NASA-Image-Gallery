import { Component, OnInit } from '@angular/core';
import { ImgFolderService } from '../img-folder.service';
import { ImgFolder } from '../imgfolder';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ImgSearchService } from '../img-search.service';
import { EditUserImgFoldersService } from '../edit-user-img-folders.service';

@Component({
  selector: 'app-img-search',
  templateUrl: './img-search.component.html',
  styleUrls: ['./img-search.component.css']
})
export class ImgSearchComponent implements OnInit {

  imagesArray: String[];
  imgfolders: ImgFolder[];

  constructor(private imgfolderService: ImgFolderService, 
    private router: Router,
    private cookieService: CookieService,
    private imgsearchService: ImgSearchService,
    private edituserimgfodlerService: EditUserImgFoldersService
   ) { }


  value: string;
  values: string[];
  ngOnInit() {
    var owner = this.cookieService.get('auth');
  }

  imgSearch(searchTerm:string){
    var images = [];
    this.imgsearchService.imgSearch(searchTerm).subscribe(data =>{
      var returnObj: any;
      returnObj = data;
      var items = returnObj.collection.items;

      if(items.length == 0){
        alert("No results found. Try again.")
        return;
      }
      for(var i = 0; i < 100; i++){
        if(!items[i].href.includes('video') && !items[i].href.includes('audio')){
          images.push(items[i].links[0])
        }
      }

    })
    this.imagesArray = images;
  }

  addImage(url: string){
    this.value = location.pathname;
    this.values = this.value.split("/");
    this.value = this.values[2];
    this.edituserimgfodlerService.addImage( this.value, url).subscribe(data =>{
      var returnObj: any;
      returnObj = data;
      alert("Image added");
      return
    })
  }

}