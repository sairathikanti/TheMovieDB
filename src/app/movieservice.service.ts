import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {MovieDetails} from './movie-details';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class MovieserviceService {

  constructor(private httpClient: HttpClient) {}

getUsers(){
    return this.httpClient.get('https://api.themoviedb.org/3/trending/movie/day?api_key=24007c69c4883788328731d34576d519&page=1');
  }
  
  }
