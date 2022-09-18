import { areIntervalsOverlapping } from 'date-fns';
import { Agendamento } from '../../entidades/agendamento';
import { RepositorioAgendamentos } from './../repositorio-agendamentos';
export class EmMemoriaRepositorioAgendamentos implements RepositorioAgendamentos {
  public itens: Agendamento[] = [];

  async criar(agendamento: Agendamento): Promise<void> {
    this.itens.push(agendamento);
  }

  async encontrarAgendamentosSobrepostos(iniciaEm: Date, terminoEm: Date): Promise<Agendamento | null> {
    const agendamentosSobrepostos = this.itens.find(agendamento => {
      return areIntervalsOverlapping(
        { start: iniciaEm, end: terminoEm },
        { start: agendamento.iniciaEm, end: terminoEm },
        { inclusive: true });
    });

    if (!agendamentosSobrepostos) {
      return null;
    }

    return agendamentosSobrepostos;
  }
} 