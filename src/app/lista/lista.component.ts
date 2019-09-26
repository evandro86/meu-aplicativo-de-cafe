import { Component, OnInit } from '@angular/core';
import { DadosService } from '../dados.service';
import { Cafe } from '../logica/Cafe';
import { Router } from '@angular/router';
import { GeolocalizacaoService } from '../geolocalizacao.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  lista: [Cafe];

  constructor(private dados: DadosService, private roteador: Router, private geolocalizacao: GeolocalizacaoService) { }

  detalhes(cafe: Cafe) {
    this.roteador.navigate(['/cafe', cafe._id]);
  }

  mapa(cafe: Cafe) {
    const mapaURL = this.geolocalizacao.getMapLink(cafe.localizacao);
    location.href = mapaURL;
  }

  compartilhar(cafe: Cafe) {
    const compartilharTexto = `Tomei este café no local: ${cafe.local}, e para mim é um café que classifico ${cafe.classificacao} estrelas`;
    if ('share' in navigator) {
      (navigator as any).share({
        title: cafe.nome,
        text: compartilharTexto,
        url: window.location.href
      }).then( () => console.log('compartilhado')).catch( () => console.log('compartilhamento de erro'));
    } else {
      const compartilharURL = `whatsapp://send?text=${encodeURIComponent(compartilharTexto)}`;
      location.href = compartilharURL;
    }
  }

  ngOnInit() {
    this.dados.getLista(lista => {
      this.lista = lista;
    });
  }

}
