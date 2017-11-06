import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [HeaderComponent, SidebarComponent],
  declarations: [HeaderComponent, SidebarComponent]
})
export class LayoutModule { }
