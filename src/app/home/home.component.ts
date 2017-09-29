import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CrudService} from '../crud.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
data;
user;
rform: FormGroup;
name: any;
description: string;

  constructor(private fb: FormBuilder,private cs:CrudService) {
    this.data = {};
    this.rform = fb.group({
      'name' : [null, Validators.required],
      'job' : [null, Validators.compose([Validators.required,Validators.minLength(30)])],
    })

   }

  ngOnInit() {
  }

addPost(data) {
  this.name= data.name;
  this.description = data.description;
  console.log(data);

this.cs.addPost(data)
.then(data=>{
  console.log(data);
  this.user = JSON.parse(data._body);
  console.log(this.user);

},error=>{
  console.log(error);
})
}
}
