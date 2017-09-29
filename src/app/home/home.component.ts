import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
data;

rform: FormGroup;
name: any;
description: string;

  constructor(private fb: FormBuilder) {
    this.data = {};
    this.rform = fb.group({
      'name' : [null, Validators.required],
      'description' : [null, Validators.compose([Validators.required,Validators.minLength(30)])],
    })
   }

  ngOnInit() {
  }

addPost(data) {
  this.name= data.name;
  this.description = data.description;
  console.log(data);
}
}
