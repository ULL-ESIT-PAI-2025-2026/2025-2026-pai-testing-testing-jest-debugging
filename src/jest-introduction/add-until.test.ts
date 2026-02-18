/**
 * Universidad de La Laguna (ULL)
 * Escuela Superior de Ingeniería y Tecnología (ESIT)
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas (PAI)
 *
 * @file    sleep.test.ts
 * @author  Paula Díaz Jorge
 * @date    18/02/2026
 */

import { addUntil } from "./add-until";
const { performance } = require("node:perf_hooks");

describe('addUntil function tests', () => {
  test('FAILS because addUntil lasts > 1ms', () => {
    const start = performance.now();
    addUntil(1_000_000);
    const end = performance.now();

    expect(end-start).toBeLessThanOrEqual(1);
  });

  test( "addUntil lasts <= 5ms", () => {
    const start = performance.now();
    addUntil(1_000_000);
    const end = performance.now();

    expect(end-start).toBeLessThanOrEqual(5);
  });
});