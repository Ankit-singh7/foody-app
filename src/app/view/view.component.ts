import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { AppService } from '../app.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
photo:any;
// star
profileForm = this.fb.group({
  star:['',Validators.required],
  Name: ['', Validators.required],
  description:['',Validators.required]
});

  constructor(public router:Router,public activatedRouter:ActivatedRoute,public appservice:AppService,private fb: FormBuilder) { }

  ngOnInit() {
    console.log(this.activatedRouter.snapshot.params);
    this.photo = this.appservice.getDetail();
    console.log(this.photo);
  }
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
    // console.log(e)
    // e.preventDefault();
    // e.stopPropagation();
    this.appservice.reviewSave(this.profileForm.value);
    this.router.navigate([`/image/${this.activatedRouter.snapshot.params.id}/${this.activatedRouter.snapshot.params.page}`]);
  }

}
