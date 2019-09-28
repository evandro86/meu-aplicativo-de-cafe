import { Injectable } from '@angular/core';
import { Cafe } from './logica/Cafe';
import { Localizacao } from './logica/Localizacao';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DadosService {

  constructor(private http: HttpClient) { }

 // public endpoint = 'http://localhost:3000';
  // public endpoint = 'http://192.168.0.17:3000';
  endpoint = 'https://meu-aplicativo-de-cafe-api.herokuapp.com';

  get(cafeId: string, callback) {
    this.http.get(`${this.endpoint}/cafes/${cafeId}`)
      .subscribe(response => {
        // callback(response.json());
        callback(response);
      });
  }

  getLista(callback) {
    // // TODO: Mudar com Web Service real
    // const lista = [
    //   new Cafe('Duplo Expresso', 'Café Ensolarado', new Localizacao('123 Market St', 'San Francisco')),
    //   new Cafe('Caramel Americano', 'Starcoffee', new Localizacao('Gran Via 34', 'Madrid'))
    // ];
    // callback(lista);

    this.http.get(`${this.endpoint}/cafes`)
    .subscribe(response => {
      // tslint:disable-next-line: max-line-length
      // Para futuros visitantes : no novo HttpClient(Angular 4.3+), o responseobjeto é JSON por padrão, portanto você não precisa response.json().data mais fazer isso . Basta usar responsediretamente.
      // console.log(response.json());
      // callback(response.json());
      console.log(response);
      callback(response);
    });

  }

  // save(cafe, callback) {
  //   // TODO: Mudar com Web Service real
  //   callback(true);
  // }

  salvarDados(cafe, callback) {
    if (cafe._id) {
      // É uma atualização
      this.http.put(`${this.endpoint}/cafes/${cafe._id}`, cafe)
        .subscribe(response => {
          callback(true);
        });
    } else {
      // É uma inserção
      this.http.post(`${this.endpoint}/cafes`, cafe)
        .subscribe(response => {
          callback(true);
        });
    }
  }

}
