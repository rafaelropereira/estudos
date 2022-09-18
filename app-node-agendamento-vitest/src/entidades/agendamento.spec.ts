import { Agendamento } from './agendamento';
import { expect, test } from 'vitest';

test('Cria um agendamento', () => {
  const iniciaEm = new Date();
  const terminaEm = new Date();

  terminaEm.setDate(terminaEm.getDate() + 1);

  const agendamento = new Agendamento({
    cliente: 'João Ninguém',
    iniciaEm,
    terminaEm,
  });

  expect(agendamento).instanceOf(Agendamento);
  expect(agendamento.cliente).toBe('João Ninguém');

});

test('Não pode criar um agendamento com data de termino menor que a data de inicio', () => {

  const iniciaEm = new Date();
  const terminaEm = new Date();

  terminaEm.setDate(terminaEm.getDate() - 1);

  expect(() => new Agendamento({
    cliente: 'João Ninguém',
    iniciaEm,
    terminaEm,
  })).toThrow();
});