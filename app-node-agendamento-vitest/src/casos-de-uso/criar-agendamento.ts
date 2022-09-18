import { RepositorioAgendamentos } from '../repositorios/repositorio-agendamentos';
import { Agendamento } from './../entidades/agendamento';
export interface CriaAgendamentoRequest {
  cliente: string;
  iniciaEm: Date;
  terminaEm: Date;
}

type CriaAgendamentoResponse = Agendamento;
export class CriarAgendamento {

  constructor(private repositorioAgendamentos: RepositorioAgendamentos) { }

  async executa({ cliente, iniciaEm, terminaEm }: CriaAgendamentoRequest): Promise<CriaAgendamentoResponse> {

    const agendamentoSobreposto = await this.repositorioAgendamentos.encontrarAgendamentosSobrepostos(iniciaEm, terminaEm);

    if (agendamentoSobreposto) {
      throw new Error('Outro agendamento está sobrepondo a data deste');
    }

    const agendamento = new Agendamento({ cliente, iniciaEm, terminaEm });

    await this.repositorioAgendamentos.criar(agendamento);

    return agendamento;
  }
}