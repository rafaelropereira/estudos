import { expect, test } from 'vitest';
import { obterDataFutura } from './obter-data-futura';

test('Acrescer um ano na data definida', () => {
  const year = new Date().getFullYear();
  expect(obterDataFutura(`${year}-08-10`).getFullYear()).toEqual(2023);
});