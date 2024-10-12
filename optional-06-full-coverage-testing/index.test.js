// index.test.js
import { test } from 'node:test';
import assert from 'node:assert';
import sum from './index.js';

test('sum function tests', () => {
  // Skenario 1: Menguji penjumlahan normal
  assert.strictEqual(sum(2, 3), 5); // 2 + 3 = 5

  // Skenario 2: Menguji dengan angka negatif
  assert.strictEqual(sum(-1, 1), 0); // a < 0
  assert.strictEqual(sum(1, -1), 0); // b < 0
  assert.strictEqual(sum(-1, -1), 0); // a < 0 && b < 0

  // Skenario 3: Menguji dengan tipe data yang salah
  assert.strictEqual(sum('2', 3), 0); // a bukan number
  assert.strictEqual(sum(2, '3'), 0); // b bukan number
  assert.strictEqual(sum('2', '3'), 0); // keduanya bukan number
  assert.strictEqual(sum(true, 3), 0); // a boolean
  assert.strictEqual(sum(2, false), 0); // b boolean

  // Skenario 4: Menguji dengan angka nol
  assert.strictEqual(sum(0, 0), 0); // 0 + 0 = 0
  assert.strictEqual(sum(0, 5), 5); // 0 + 5 = 5
  assert.strictEqual(sum(5, 0), 5); // 5 + 0 = 5
});
