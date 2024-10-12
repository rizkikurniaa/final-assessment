// index.test.js
import { test } from 'node:test';
import assert from 'node:assert';
import { sum } from './index.js';

test('menjumlahkan dua angka', () => {
  const result = sum(1, 2);
  assert.strictEqual(result, 3, '1 + 2 harus sama dengan 3');
});

test('menjumlahkan angka negatif', () => {
  const result = sum(-1, -1);
  assert.strictEqual(result, -2, '-1 + -1 harus sama dengan -2');
});

test('menjumlahkan angka nol', () => {
  const result = sum(0, 0);
  assert.strictEqual(result, 0, '0 + 0 harus sama dengan 0');
});

test('menjumlahkan angka dengan nol', () => {
  const result = sum(5, 0);
  assert.strictEqual(result, 5, '5 + 0 harus sama dengan 5');
});
