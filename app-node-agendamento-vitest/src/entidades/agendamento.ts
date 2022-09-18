export interface AgendamentoProps {
  cliente: string;
  iniciaEm: Date;
  terminaEm: Date;
}

export class Agendamento {

  private props: AgendamentoProps;

  constructor(props: AgendamentoProps) {
    this.props = props;

    if (this.props.terminaEm <= this.props.iniciaEm) {
      throw new Error('Data de termino não pode ser menor que a data de início');
    }
  }

  get cliente() {
    return this.props.cliente;
  }

  get iniciaEm() {
    return this.props.iniciaEm;
  }

  get terminaEm() {
    return this.props.terminaEm;
  }
}