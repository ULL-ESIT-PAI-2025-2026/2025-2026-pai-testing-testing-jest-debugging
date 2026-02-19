/**
 * Universidad de La Laguna (ULL)
 * Escuela Superior de Ingeniería y Tecnología (ESIT)
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas (PAI)
 *
 * @file    user-factory.test.js
 * @author  Guillermo López Concepción
 * @date    17/02/2026
 * @desc    Tests for user-factory demonstrating toBe vs toEqual matchers.
 */

const {createUser} = require('./user-factory');

describe('User Factory Matchers', () => {
  /**
   * Demonstrates deep equality for object content.
   */
  it('should create a user with the correct content (toEqual)', () => {
    const result = createUser('Guillermo');
    expect(result).toEqual({name: 'Guillermo', active: true});
  });

  /**
   * Demonstrates identity check.
   */
  it('should distinguish between different instances (toBe)', () => {
    const result = createUser('Guillermo');
    const expected = {name: 'Guillermo', active: true};

    // FAIL: Even if content is identical, they are different objects in memory.
    // expect(result).toBe(expected); 
    
    // SUCCESS: result is NOT the same instance as expected.
    expect(result).not.toBe(expected);
  });
});