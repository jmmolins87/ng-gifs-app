import { 
  Component, 
  Input, 
  Output 
} from '@angular/core';
import { GifsService } from '../../services/gifs.service';
import { Gif } from '../../interfaces/gifs.interface';

@Component({
  selector: 'gifs-card-list',
  templateUrl: './card-list.component.html',
  styles: [
  ]
})
export class CardListComponent {

  constructor( private _gifsService: GifsService ) { }

  @Input()
  gif: Gif[] = [];

  @Output()
  get showGifsResponse() {
    return this._gifsService.myGifsSearches;
  }

}
