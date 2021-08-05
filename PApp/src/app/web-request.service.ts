import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebRequestService {
  readonly ROOT_URL:any;
  
  constructor(private http:HttpClient) {
    this.ROOT_URL = "http://localhost:9000"
   }
   get(uri:string){
     return this.http.get(`${this.ROOT_URL}/${uri}`);
   }
}
