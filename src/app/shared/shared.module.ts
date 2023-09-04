import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { AsidebarComponent } from './components/asidebar/asidebar.component';
import { LazyImageComponent } from './components/lazy-image/lazy-image.component';



@NgModule({
  declarations: [
    AsidebarComponent,
    LazyImageComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AsidebarComponent,
    LazyImageComponent
  ]
})
export class SharedModule { }
