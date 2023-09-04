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

  // @Input() nos permite recibir propiedades desde el componente padre
  @Input()
  public titlePage: string = 'Buscar Gifs';

  @Input()
  public placeholder: string = '';

  // ViewChild nos permite obtener una referencia a un elemento del DOM
  @ViewChild('txtInputSearch') 
  tagInput!: ElementRef<HTMLInputElement>;

  constructor( private _gifsService: GifsService ) { }

  searchTag() {
    const newTag: string = this.tagInput.nativeElement.value;
    // Si el tag esta vacio, no hacemos nada
    this._gifsService.searchTag( newTag );
    // Limpiamos el input
    this.tagInput.nativeElement.value = '';
  }

}
