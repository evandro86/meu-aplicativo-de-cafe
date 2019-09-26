import { Injectable } from '@angular/core';
import { Localizacao } from './logica/Localizacao';

@Injectable({
  providedIn: 'root'
})
export class GeolocalizacaoService {

  constructor() { }

  requestLocalizacao(callback) {
    // W3C Geolocalização API
    navigator.geolocation.getCurrentPosition(
      posicao => {
        callback(posicao.coords);
      },
      erro => {
        callback(null);
      }
    );
  }

  getMapLink(localizacao: Localizacao) {
    let query = '';
    if (localizacao.latitude) {
      query = localizacao.latitude + ',' + localizacao.longitude;
    } else {
      query = `${localizacao.endereco}, ${localizacao.cidade}`;
    }
    if (/iPad|iPhone|iPod/.test(navigator.userAgent)) {
      return `https://maps.apple.com/?q=${query}`;
    } else {
      return `https://maps.google.com/?q=${query}`;
    }
    // Universal Link
    // <a href="https://maps.google.com/?q=Eiffel+Tower">
    // <a href="https://maps.apple.com/?q=34.44,56.44">
  }

}
