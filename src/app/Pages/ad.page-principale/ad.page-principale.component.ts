import { AdRechercheComponent } from './../ad.recherche/ad.recherche.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { AdLivresService } from '../../Services/ad.livres.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-ad-page-principale',
  templateUrl: './ad.page-principale.component.html',
  styleUrls: ['./ad.page-principale.component.css','./flags.scss']
})
export class AdPagePrincipaleComponent implements OnInit {

  Items: any[];
  SearchedItems: any[];
  //searchedVal: string;
  @ViewChild('child') child: AdRechercheComponent;

 
  constructor(private _serviceLivres: AdLivresService, private translate: TranslateService) {
    
  }


  ngOnInit() {
    this._serviceLivres.getLivres()
      .subscribe(resp => {
        this.Items = resp['items'];
        this.SearchedItems = resp['items'];

        console.log(this.Items);

      });
  }

  rechercheLivre() {
    if (this.child.searchedVal.length > 0) {
      this.SearchedItems = new Array();
      for (const i of this.Items) {
        if (this.matchesSearchedValue(i)) {
          this.SearchedItems.push(i);
        }
      }
    } else {
      this.SearchedItems = this.Items;
    }
  }

  matchesSearchedValue(item) {
    if (item.volumeInfo.publisher !== undefined) {
      if (item.volumeInfo.publisher.toLowerCase().indexOf(this.child.searchedVal.toLowerCase()) >= 0
        || this.child.searchedVal.toLowerCase().indexOf(item.volumeInfo.publisher.toLowerCase()) >= 0) {
        return true;
      }

    }
    if (item.volumeInfo.title.toLowerCase().indexOf(this.child.searchedVal.toLowerCase()) >= 0
      || this.child.searchedVal.toLowerCase().indexOf(item.volumeInfo.title.toLowerCase()) >= 0) {
      return true;
    }
    if (item.volumeInfo.authors !== undefined) {
      for (var i = 0; i < item.volumeInfo.authors.length; i++) {
        if (item.volumeInfo.authors[i].toLowerCase().indexOf(this.child.searchedVal.toLowerCase()) >= 0
          || this.child.searchedVal.toLowerCase().indexOf(item.volumeInfo.authors[i].toLowerCase()) >= 0) {
          return true;
        }
      }
    }
    if (item.volumeInfo.categories !== undefined) {
      for (var i = 0; i < item.volumeInfo.categories.length; i++) {
        if (item.volumeInfo.categories[i].toLowerCase().indexOf(this.child.searchedVal.toLowerCase()) >= 0
          || this.child.searchedVal.toLowerCase().indexOf(item.volumeInfo.categories[i].toLowerCase()) >= 0) {
          return true;
        }
      }
    }


  }
  switchLanguage(language: string) {
    this.translate.use(language);
  }
}
