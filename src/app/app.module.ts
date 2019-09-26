import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule, MatIconModule, MatInputModule, MatSelectModule, MatSliderModule,
  MatToolbarModule, MatCardModule, MatSlideToggleModule
} from '@angular/material';
import { NgModule } from '@angular/core';
import { GeolocalizacaoService } from './geolocalizacao.service';
import { DadosService } from './dados.service';
import { AppComponent } from './app.component';

import 'hammerjs';
import { from } from 'rxjs';
import { ListaComponent } from './lista/lista.component';
import { CafeComponent } from './cafe/cafe.component';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';

const rotas: Routes = [
  { path: '', component: ListaComponent },
  { path: 'cafe', component: CafeComponent },
  { path: 'cafe/:id', component: CafeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ListaComponent,
    CafeComponent
  ],
  imports: [RouterModule.forRoot(rotas), FormsModule, HttpClientModule,
    BrowserModule, BrowserAnimationsModule, MatButtonModule, MatIconModule, MatInputModule, MatSelectModule, MatSliderModule,
    MatToolbarModule, MatCardModule, MatSlideToggleModule
  ],
  providers: [GeolocalizacaoService, DadosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
