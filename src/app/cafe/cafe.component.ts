import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cafe } from '../logica/Cafe';
import { GeolocalizacaoService } from '../geolocalizacao.service';
import { Localizacao } from '../logica/Localizacao';
import { ClassificacaoDegustacao } from '../logica/ClassificacaoDegustacao';
import { DadosService } from '../dados.service';

@Component({
  selector: 'app-cafe',
  templateUrl: './cafe.component.html',
  styleUrls: ['./cafe.component.css']
})
export class CafeComponent implements OnInit {

  cafe: Cafe;
  tiposCafe = ['Café expresso', 'Café com leite', 'Capuccino', 'Mocha', 'Pingado', 'Média', 'Café Breve',
    'Macchiato', 'Café com Panna', 'Café com Chantilly'];
  classificacaoDegustacaoHabilitado = false;

  constructor(private rota: ActivatedRoute, private geolocalizacao: GeolocalizacaoService, private roteador: Router,
              private dados: DadosService) {}

  // Assinatura de roteamento
  assinaturaRoteamento: any;

  // Verifica se esta selecionado ou checado a opção de classificações de degustação
  verificaClassificacaoDegustacao(checado: boolean) {
    if (checado) {
      this.cafe.classificacaoDegustacao = new ClassificacaoDegustacao();
    } else {
      this.cafe.classificacaoDegustacao = null;
    }
  }

  cancelar() {
    this.roteador.navigate(['/']);
  }

  salvar() {
    this.dados.salvarDados(this.cafe, resultado => {
      if (resultado) {
        this.roteador.navigate(['/']);
      }
    });
  }

  ngOnInit() {
    this.cafe = new Cafe();
    this.assinaturaRoteamento = this.rota.params.subscribe(params => {
      console.log(params.id);
      if (params.id) {
        this.dados.get(params.id, response => {
          this.cafe = response;
          if (this.cafe.classificacaoDegustacao) {
            this.classificacaoDegustacaoHabilitado = true;
          }
        });
      }
    });

    this.geolocalizacao.requestLocalizacao(location => {
      if (location) {
        this.cafe.localizacao.latitude = location.latitude;
        this.cafe.localizacao.longitude = location.longitude;
      }
    });
  }

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnDestroy() {
    this.assinaturaRoteamento.unsubscribe();
  }

}
