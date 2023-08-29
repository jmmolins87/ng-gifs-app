import { 
  Component, 
  ElementRef, 
  Input, 
  ViewChild 
} from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-search-box',
  templateUrl: './search-box.component.html',
  styles: [
  ]
})
export class SearchBoxComponent {

  @Input()
  public titlePage: string = 'Buscar Gifs';
  @Input()
  public placeholder: string = '';

  @ViewChild('txtInputSearch') 
  tagInput!: ElementRef<HTMLInputElement>;

  constructor( private _gifsService: GifsService ) { }

  searchTag() {
    const newTag: string = this.tagInput.nativeElement.value;
    this._gifsService.searchTag( newTag );
    // Limpiamos el input
    this.tagInput.nativeElement.value = '';
  }

}
