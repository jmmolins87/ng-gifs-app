import { Component, Input } from '@angular/core';

import { GifsService } from '../../../gifs/services/gifs.service';

@Component({
  selector: 'shared-asidebar',
  templateUrl: './asidebar.component.html',
  styles: [
  ]
})
export class AsidebarComponent {
  
  @Input()  
  public titleApp: string = 'Gifs App'; 
  
  constructor( private _gifsService: GifsService ) { }

  public get newGif() {
    return this._gifsService.tagsHistory;
  }

}
