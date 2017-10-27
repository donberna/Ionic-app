import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SearchService{

    constructor(private http:Http) {

    }

    listMovies() {
        var url = 'https://api.themoviedb.org/3/discover/movie?api_key=52bd9f8e6677c816003dc7922fbc890a&sort_by=popularity.desc&page=1';
        var response = this.http.get(url).map(res => res.json());
        return response;  
    } 

    listSeries(){
        var url = 'https://api.themoviedb.org/3/discover/tv?api_key=52bd9f8e6677c816003dc7922fbc890a&language=en-US&sort_by=popularity.desc&page=1';
        var response = this.http.get(url).map(res => res.json());
        return response;
    }   

    listPeople(){
        var url = 'https://api.themoviedb.org/3/person/popular?api_key=52bd9f8e6677c816003dc7922fbc890a&page=1';
        var response = this.http.get(url).map(res => res.json());
        return response;
    } 

    search(word){
        
        var url = 'https://api.themoviedb.org/3/search/multi?api_key=52bd9f8e6677c816003dc7922fbc890a&query=' + encodeURI(word) + '&include_adult=false';
        var response = this.http.get(url).map(res => res.json());
        return response;
    }

}

