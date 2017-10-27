import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DetailPage } from '../detail/detail';
import { SearchService } from '../../service/SearchService';

@IonicPage()
@Component({
  selector: 'page-serie',
  templateUrl: 'serie.html',
})
export class SeriePage {

  series: null;
  resultSearch: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private searchService: SearchService) {
  }

  ionViewDidLoad() {
    this.listSeries();
  }

  listSeries() {
   	   	  
	this.searchService.listSeries().subscribe(
		data => {
			this.series = data.results; 
			console.log(data);
		},
		err => {
			console.log(err);
		},
		() => console.log('Series Search Complete')
	);

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
