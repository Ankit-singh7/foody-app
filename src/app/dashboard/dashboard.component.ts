import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  photos:any;
  page: number = 1;
  reviewData:any;
  snapId:number
  response:any;
  columns:number=3;

  constructor(public appservice:AppService,public router:Router,public activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.snapId = this.activatedRoute.snapshot.params.id
    if(this.snapId !=1){
      this.page = this.activatedRoute.snapshot.params.page;
     this.reviewData =  this.appservice.getReview();
    }
    this.appservice.getPhotos()
    .subscribe((apiResponse)=>{
      console.log(apiResponse);
      this.response = apiResponse;
      console.log(this.response);
      this.photos = this.response.photos.photo;
      console.log(this.photos);
      console.log(window.innerWidth);
    })
    if(window.innerWidth<550){
      this.columns = 1;
    }else if(window.innerWidth<900 && window.innerWidth>550 ){
      this.columns = 2;
    }
   
  }
  review(id:string){
    this.photos.forEach(element => {
      if(element.id == id){
        console.log(element)
        this.appservice.saveDetail(element);
      }
    });
    console.log(this.page);
    this.router.navigate([`/view/${id}/${this.page}`]);
  }

}