import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Gif, ResponseGifs } from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  public url: string = 'https://api.giphy.com/v1/gifs';
  public token: string = 'hVLumt6OEV2BEmeLCwVyGFWwhw19SZOL';
  public myGifsSearches: Gif[] = [];

  private _tagsHistory: string[] = [];

  constructor( private _http: HttpClient ) {
    // Cargamos el arreglo desde el localStorage
    this.loadLocalStorage();
  }

  public get tagsHistory() {
    // Retornamos una copia del arreglo
    return [ ...this._tagsHistory ];
  }

  private manageHistory( tag: string ): void {
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
    // Guardamos el arreglo en el localStorage
    this.saveLocalStorage();
  }

  private saveLocalStorage(): void {
    // Guardamos el arreglo en el localStorage
    // JSON.stringify() convierte un objeto a un string
    localStorage.setItem('history', JSON.stringify( this._tagsHistory ));
  }

  private loadLocalStorage(): void {
    // Si no hay data en el localStorage no hacemos nada
    if (!localStorage.getItem('history')) return;
    // Cargamos el arreglo desde el localStorage
    // JSON.parse() convierte un string a un objeto
    this._tagsHistory = JSON.parse(localStorage.getItem('history')! ); 
    // Si el arreglo esta vacio no hacemos nada
    if( this._tagsHistory.length === 0 ) return;
    // Si el arreglo tiene elementos, buscamos el primero
    this.searchTag( this._tagsHistory[0] );
  }

  searchTag( tag: string ): void {
    // Si el tag esta vacio, no hacemos nada
    if( tag.length === 0 ) return;  
    // Si el tag no existe en el arreglo, lo agregamos
    this.manageHistory( tag );
    // Creamos los parametros para la peticion HTTP
    const params = new HttpParams()
      .set('api_key', this.token)
      .set('limit', '50')
      .set('lang', 'es')
      .set('q', tag)
    // Hacemos la peticion HTTP
    this._http.get<ResponseGifs>(`${ this.url }/search`, { params })
    .subscribe(gifs => {
      // Guardamos los gifs en el arreglo
      this.myGifsSearches = gifs.data;
    });
  }
}
