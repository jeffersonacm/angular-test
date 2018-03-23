import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {TreeTableModule} from 'primeng/treetable';
import {TreeNode} from 'primeng/api';


import { AppComponent } from './app.component';
import { TabelaComponent } from './tabela/tabela.component';;
import { HttpModule } from '@angular/Http';
import { ChamadaService } from './tabela/chamada.service';


@NgModule({
  declarations: [
    AppComponent,
    TabelaComponent
  ],
  imports: [
    BrowserModule,
    TreeTableModule,
    HttpModule,
    
    //TableModule
  ],
  exports: [TabelaComponent],
  providers: [ChamadaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
