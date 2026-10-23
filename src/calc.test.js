import { test } from 'node:test';
import assert from 'node:assert/strict';
import { add, divide, multiply, subtract, power } from './calc.js';

test('add: складывает два числа', () => {
  assert.equal(add(2, 3), 5);
});

test('divide: делит числа', () => {
  assert.equal(divide(6, 3), 2);
});

test('divide: бросает ошибку при делении на ноль', () => {
  assert.throws(() => divide(1, 0), /Division by zero/);
});
test('subtract: вычитает два числа', () => {
  assert.equal(subtract(5, 2), 3);
});
test('multiply: умножает два числа', () => {
  assert.equal(multiply(2, 3), 6);
});

test('power: считает степень, если флаг включен', () => {
  process.env.ENABLE_POWER = 'true';
  assert.equal(power(2, 3), 8);
  process.env.ENABLE_POWER = 'false';
});
