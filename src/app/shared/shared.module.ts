import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { AsidebarComponent } from './components/asidebar/asidebar.component';



@NgModule({
  declarations: [
    AsidebarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AsidebarComponent
  ]
})
export class SharedModule { }
