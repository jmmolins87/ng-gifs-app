import { Component } from '@angular/core';

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

}
