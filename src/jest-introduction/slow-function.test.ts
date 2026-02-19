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

import { slowFunction } from "./slow-function";

describe('slowFunction function tests', () => {
  test('Timeout does not work with a synchronous function to test time limits', () => {
    slowFunction(500);
  }, 50);
});

describe('slowFunction function tests', () => {
  test('slowFunction must not exceed 5ms of execution time', () => {
    const start = performance.now();
    slowFunction(5);
    const end = performance.now()

    expect(end - start).toBeLessThanOrEqual(5);
  });
});

describe('slowFunction function tests', () => {
  test('slowFunction must not exceed 5ms of execution time', () => {
    const start = Date.now();
    slowFunction(5);
    const end = Date.now()

    expect(end - start).toBeLessThanOrEqual(5);
  });
});