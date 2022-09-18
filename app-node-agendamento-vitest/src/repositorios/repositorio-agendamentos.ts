import { Agendamento } from './../entidades/agendamento';

export interface RepositorioAgendamentos {
  criar(agendamento: Agendamento): Promise<void>;
  encontrarAgendamentosSobrepostos(iniciaEm: Date, terminoEm: Date): Promise<Agendamento | null>
}