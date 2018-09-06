import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdLivresService {


  private _LivresURL="https://www.googleapis.com/books/v1/volumes?q=toto";
  constructor(public http: HttpClient) { 


    
  }
  getLivres(){
    
    return this.http.get(this._LivresURL);
  }
}
