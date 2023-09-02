import { Component } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-card-list',
  templateUrl: './card-list.component.html',
  styles: [
  ]
})
export class CardListComponent {

  public gifs: any[] = [{
    title: 'Gif 1',
  }];

  constructor( private _gifsService: GifsService ) { }

  get showGifsResponse() {
    return this._gifsService.myGifsSearches;
  } 

}
