import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MoviePage } from '../movie/movie';
import { SeriePage } from '../serie/serie';
import { PeoplePage } from '../people/people';
import { DetailPage } from '../detail/detail';
import { SearchService } from '../../service/SearchService';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  resultSearch: any[];
	
  constructor(public navCtrl: NavController, private searchService: SearchService) {
  }

  goToMovies(){
	this.navCtrl.push(MoviePage);  	
  }

  goToSeries(){
	this.navCtrl.push(SeriePage);
  }

  goToPeople(){
	this.navCtrl.push(PeoplePage);
  }

  search(event: any){
    
    let val = event.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.searchService.search(val).subscribe(
          data => {
          this.resultSearch = data.results; 
          console.log(data);
        },
        err => {
          console.log(err);
        },
        () => console.log('Movie Search Complete')
      );
    }else{
      this.resultSearch = [];
    }

  }

  goToDetail(event, selected) {
    console.log(selected);  
    this.navCtrl.push(DetailPage, {
      selected: selected
    });
  } 
  
}
