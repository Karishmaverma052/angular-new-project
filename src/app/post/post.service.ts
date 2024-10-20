import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, ObservableInput } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private apiURL = 'https://jsonplaceholder.typicode.com/todos/1';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'

    })
  }
  errorHandler!: (err: any, caught: Observable<Object>) => ObservableInput<any>;
  constructor(private httpClient:HttpClient) { }
  getAll():Observable<any>{
    return this.httpClient.get(this.apiURL+'/posts/').pipe(catchError(this.errorHandler));
  }
  create(post:any):Observable<any>{
    return this.httpClient.post(this.apiURL+'/posts/'+ JSON.stringify(post),
    this.httpOptions).pipe(catchError(this.errorHandler));
  }
  find(id:number):Observable<any>{
    return this.httpClient.get(this.apiURL+'/posts/'+id).pipe(catchError(this.errorHandler));
  }
  update(id:number, post:any):Observable<any>{
    return this.httpClient.put(this.apiURL+'/posts/'+id,JSON.stringify(post),
    this.httpOptions).pipe(catchError(this.errorHandler));
  }

  delete(id:number){
    return this.httpClient.delete(this.apiURL+'/posts/'+id)
    .pipe(catchError(this.errorHandler));
  }


}
