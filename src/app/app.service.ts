import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  public getPhotos() {
    return this.http.get('https://api.flickr.com/services/rest/?method=flickr.photos.search&tags=food&safe_search=1&api_key=e44a256790d014134d3101085cc22528&nojsoncallback=1&format=json&per_page=30');
}

public saveDetail(data){
  console.log('save',data);
  localStorage.setItem('currentImage', JSON.stringify(data));
}
public getDetail(){
  return JSON.parse(localStorage.getItem('currentImage'));
}
public reviewSave(data){
   localStorage.setItem('review',JSON.stringify(data));
}
public getReview(){
  return JSON.parse(localStorage.getItem('review'));
}

}
