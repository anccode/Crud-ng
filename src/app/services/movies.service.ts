import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Movie } from '../interfaces/movie';
@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private httpClient: HttpClient) { }

get(){
  return this.httpClient.get(this.API_ENDPOINT+ '/movies');
}
  save(movie: Movie){
    const headers = new HttpHeaders({'Content-Type':'application/json'});
    return this.httpClient.post(this.API_ENDPOINT + '/movie', movie, {headers:headers});
  }
}
