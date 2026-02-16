/**
 * Universidad de La Laguna (ULL)
 * Escuela Superior de Ingeniería y Tecnología (ESIT)
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas (PAI)
 *
 * @file    async-utils.test.ts
 * @author  Paula Díaz Jorge
 * @date    16/02/2026
 * @desc    Tests demonstrating asynchronous testing patterns in Jest:
 *          - async/await
 *          - resolves / rejects
 *          - returning Promises
 */

import { expect, describe, test } from '@jest/globals';
import { fetchGreeting, asyncDivide, fetchUserData } from './05-async-utils';

describe('Async Utilities', () => {
  /**
   * Using async/await to test a resolved promise.
   */
  test('fetchGreeting should return a greeting with the given name', async () => {
    const greeting = await fetchGreeting('World');
    expect(greeting).toBe('Hello, World!');
  });

  /**
   * Using the .resolves matcher for cleaner assertions.
   */
  test('fetchGreeting should resolve with the correct message', () => {
    return expect(fetchGreeting('Jest')).resolves.toBe('Hello, Jest!');
  });

  /**
   * Testing a successful async division.
   */
  test('asyncDivide should divide two numbers correctly', async () => {
    const result = await asyncDivide(10, 2);
    expect(result).toBe(5);
  });

  /**
   * Using .resolves to check a numeric result.
   */
  test('asyncDivide should resolve to a decimal value', () => {
    return expect(asyncDivide(7, 2)).resolves.toBeCloseTo(3.5);
  });

  /**
   * Using .rejects to test a promise rejection with a specific error.
   */
  test('asyncDivide should reject when dividing by zero', () => {
    return expect(asyncDivide(5, 0)).rejects.toThrow('Division by zero is not allowed.');
  });

  /**
   * Using async/await with try/catch to verify rejection.
   */
  test('asyncDivide should throw an error for zero divisor (try/catch)', async () => {
    expect.assertions(1);
    try {
      await asyncDivide(10, 0);
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
    }
  });

  /**
   * Testing an async function that returns structured data.
   */
  test('fetchUserData should return correct user object', async () => {
    const user = await fetchUserData(1);
    expect(user).toEqual({ id: 1, name: 'Alice' });
  });

  /**
   * Testing rejection of an async function.
   */
  test('fetchUserData should reject for a non-existent user', async () => {
    await expect(fetchUserData(99)).rejects.toThrow('User with id 99 not found.');
  });
});
