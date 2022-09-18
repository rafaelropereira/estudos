import { Agendamento } from './../entidades/agendamento';
export interface CriaAgendamentoRequest {
  cliente: string;
  iniciaEm: Date;
  terminaEm: Date;
}

type CriaAgendamentoResponse = Agendamento;

export class CriarAgendamento {
  async executa({ cliente, iniciaEm, terminaEm }: CriaAgendamentoRequest): Promise<CriaAgendamentoResponse> {
    const agendamento = new Agendamento({ cliente, iniciaEm, terminaEm });
    return agendamento;
  }
}