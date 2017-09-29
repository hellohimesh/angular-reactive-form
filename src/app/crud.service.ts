import { Injectable } from '@angular/core';
import { Http, Response, Headers } from "@angular/http";
import "rxjs/Rx";
import { Observable } from "rxjs";

@Injectable()
export class CrudService {

  constructor( private http: Http ) { }


  addPost(data): Promise<any> {
    console.log("ADDSURVEY DATA", data);
    return this.http.post("https://reqres.in/api/user", data).toPromise();
  }

}
