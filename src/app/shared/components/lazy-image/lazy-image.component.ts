import { 
  Component, 
  Input, 
  OnInit 
} from '@angular/core';

@Component({
  selector: 'shared-lazy-image',
  templateUrl: './lazy-image.component.html',
  styles: [
  ]
})
export class LazyImageComponent implements OnInit {

  @Input()
  public src!: string;
  @Input()
  public alt: string = '';

  public hasLoaded: boolean = false;

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    if( !this.src ) throw new Error('Attribute src is required');  
  }

  onload() {
    setTimeout(() => {
      this.hasLoaded = true;
    }, 500);
  }

}
