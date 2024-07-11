import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainPageComponent } from './pages/main-page.component';
import { ListaComponent } from './components/lista/lista.component';
import { AddCharactertComponent } from './components/character/add-character.component';






@NgModule({
  declarations: [
    MainPageComponent,
    ListaComponent,
    AddCharactertComponent
  ],

  exports: [
    MainPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class DdzModule { }
