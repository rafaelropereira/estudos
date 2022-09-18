import { Agendamento } from './agendamento';
import { expect, test } from 'vitest';
import { obterDataFutura } from '../testes/utils/obter-data-futura';

test('Cria um agendamento', () => {
  const iniciaEm = obterDataFutura('2022-09-10');
  const terminaEm = obterDataFutura('2022-09-12');

  const agendamento = new Agendamento({
    cliente: 'João Ninguém',
    iniciaEm,
    terminaEm,
  });

  expect(agendamento).instanceOf(Agendamento);
  expect(agendamento.cliente).toBe('João Ninguém');
});

test('Não pode criar um agendamento com data de termino menor que a data de inicio', () => {

  const iniciaEm = obterDataFutura('2022-09-10');
  const terminaEm = obterDataFutura('2022-09-09');

  expect(() => new Agendamento({
    cliente: 'João Ninguém',
    iniciaEm,
    terminaEm,
  })).toThrow();
});