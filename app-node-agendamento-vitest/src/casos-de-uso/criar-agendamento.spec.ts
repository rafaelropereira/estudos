import { EmMemoriaRepositorioAgendamentos } from './../repositorios/em-memoria/em-memoria-repositorio-agendamentos';
import { CriarAgendamento } from './criar-agendamento';
import { describe, expect, it } from 'vitest';
import { Agendamento } from './../entidades/agendamento';
import { obterDataFutura } from '../testes/utils/obter-data-futura';

describe('Cria agendamento', () => {
  it('Deve ser possível criar um novo agendamento', () => {
    const repositorioAgendamentos = new EmMemoriaRepositorioAgendamentos();
    const criarAgendamento = new CriarAgendamento(repositorioAgendamentos);

    const iniciaEm = obterDataFutura('2022-09-10');
    const terminaEm = obterDataFutura('2022-09-12');

    expect(criarAgendamento.executa({
      cliente: 'Maria Ninguém',
      iniciaEm,
      terminaEm
    })).resolves.toBeInstanceOf(Agendamento);
  });

  it('Não deve ser possível criar um novo agendamento com datas sobrepostas', async () => {
    const repositorioAgendamentos = new EmMemoriaRepositorioAgendamentos();
    const criarAgendamento = new CriarAgendamento(repositorioAgendamentos);

    const iniciaEm = obterDataFutura('2022-09-10');
    const terminaEm = obterDataFutura('2022-09-15');

    await criarAgendamento.executa({
      cliente: 'José Ninguém',
      iniciaEm,
      terminaEm
    });

    expect(criarAgendamento.executa({
      cliente: 'Luiza Ninguém',
      iniciaEm: obterDataFutura('2022-09-10'),
      terminaEm: obterDataFutura('2022-09-14'),
    })).rejects.toBeInstanceOf(Error);

    expect(criarAgendamento.executa({
      cliente: 'Beto Ninguém',
      iniciaEm: obterDataFutura('2022-09-11'),
      terminaEm: obterDataFutura('2022-09-14'),
    })).rejects.toBeInstanceOf(Error);

    expect(criarAgendamento.executa({
      cliente: 'Ana Ninguém',
      iniciaEm: obterDataFutura('2022-09-10'),
      terminaEm: obterDataFutura('2022-09-21'),
    })).rejects.toBeInstanceOf(Error);

  });
});



