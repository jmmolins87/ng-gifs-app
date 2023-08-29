import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _tagsHistory: string[] = [];

  constructor() { }

  public get tagsHistory() {
    return [ ...this._tagsHistory ];
  }

  
  manageHistory( tag: string ): void {
    // Convertimos el tag a minusculas y eliminamos los espacios
    tag = tag.toLowerCase().trim();
    // Si el tag ya existe en el arreglo, lo eliminamos
    if( this._tagsHistory.includes( tag ) ) {
      // Si el tag no existe en el arreglo, lo agregamos
      this._tagsHistory = this._tagsHistory.filter(( oldTag ) => oldTag !== tag );
    }
    // Agregamos el tag al inicio del arreglo
    this._tagsHistory.unshift( tag );
    // Limitamos el arreglo a 10 elementos
    this._tagsHistory = this._tagsHistory.splice( 0, 10 );
  }

  public searchTag( tag: string ): void {
    // Si el tag esta vacio, no hacemos nada
    if( tag.length === 0 ) return;  
    // Si el tag no esta vacio, lo agregamos al arreglo
    this.manageHistory( tag );
  }
}
