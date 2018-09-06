import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AdResultatComponent } from './Pages/ad.resultat/ad.resultat.component';
import { AdRechercheComponent } from './Pages/ad.recherche/ad.recherche.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AdPagePrincipaleComponent } from './Pages/ad.page-principale/ad.page-principale.component';
import { AdLivresService } from './Services/ad.livres.service';
import { FormsModule } from '@angular/forms';
import { ParCategoriePipe } from './Pipes/par-categorie.pipe';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
@NgModule({
  declarations: [
    AppComponent,
    AdRechercheComponent,
    AdResultatComponent,
    AdPagePrincipaleComponent,
    ParCategoriePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [AdLivresService],
  bootstrap: [AppComponent]
})
export class AppModule { }
