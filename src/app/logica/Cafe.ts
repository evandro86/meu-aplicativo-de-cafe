import { ClassificacaoDegustacao } from './ClassificacaoDegustacao';
import { Localizacao } from './Localizacao';

export class Cafe {

  // Propriedades
  // tslint:disable-next-line: variable-name
  _id: string;
  tipo: string;
  classificacao: number;
  observacoes: string;
  classificacaoDegustacao: ClassificacaoDegustacao;

  constructor(public nome: string = '', public local: string = '', public localizacao: Localizacao = null) {
    this.localizacao = new Localizacao();
    this.classificacaoDegustacao = new ClassificacaoDegustacao();
  }

}
