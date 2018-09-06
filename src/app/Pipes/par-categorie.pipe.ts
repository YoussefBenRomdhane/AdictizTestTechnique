import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'parCategorie'
})
export class ParCategoriePipe implements PipeTransform {


 


  transform(items: any, categorie: any): any {
    if (categorie === undefined || categorie=="") {
      return items;
    }
    return items.filter(function (item) {
      return item.volumeInfo.categories==categorie;
    });
  }


}
