export interface AgendamentoProps {
  cliente: string;
  comecaEm: Date;
  terminaEm: Date;
}

export class Agendamento {
  private props: AgendamentoProps;

  constructor(props: AgendamentoProps) {
    this.props = props;
  }

  get cliente() {
    return this.props.cliente;
  }

  get comecaEm() {
    return this.props.comecaEm;
  }

  get terminaEm() {
    return this.props.terminaEm;
  }
}