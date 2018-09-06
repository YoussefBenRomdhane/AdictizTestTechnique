import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { AdLivresService } from '../../Services/ad.livres.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-adresultat',
  templateUrl: './ad.resultat.component.html',
  encapsulation: ViewEncapsulation.None,
  styles: [`
  .light-blue-backdrop {
    background-color: #5cb3fd;
  }
`]
})
export class AdResultatComponent {

  @Input() item:any;

  constructor(private modalService: NgbModal, private translate: TranslateService) { }

  openBackDropCustomClass(content) {
    this.modalService.open(content, {backdropClass: 'light-blue-backdrop'});
  }

}
