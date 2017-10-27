import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SearchService } from '../../service/SearchService';

/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {

  selected: {};	
  resultSearch: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private searchService: SearchService) {
  	this.selected = navParams.get('selected');
  }

  ionViewDidLoad() {
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
