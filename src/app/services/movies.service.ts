import { Injectable } from '@angular/core';

import MOVIES from 'src/app/movies.json';

import {Movies, Movie} from 'src/app/interfaces/movie';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  getMoviesById(id: string): Movie {
    const movies = this.getMovies();
    return movies.find((movie)=> {
        return movie.id === id;
    });
  }
  getMovies(): any {
    return MOVIES;
  }

  constructor() { }

}
