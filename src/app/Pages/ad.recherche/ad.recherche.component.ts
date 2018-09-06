import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-adrecherche',
  templateUrl: './ad.recherche.component.html',
  styleUrls: ['./ad.recherche.component.css']
})
export class AdRechercheComponent implements OnInit {

  @Input() searchedVal: string;
  @Output() someEvent = new EventEmitter<string>();
 
  constructor( private translate: TranslateService) { }

  ngOnInit() {
  }

  callParentSearch() {
    this.someEvent.next();
  }

}
