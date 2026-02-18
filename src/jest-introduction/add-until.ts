/**
 * Universidad de La Laguna (ULL)
 * Escuela Superior de Ingeniería y Tecnología (ESIT)
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas (PAI)
 *
 * @file    sleep.ts
 * @author  Paula Díaz Jorge
 * @date    18/02/2026
 */

/**
 * @desc    Adds the numbers from 1 to number
 * @param   {number} number - The last number to add
 * @returns {number} The addition of all the numbers between 1 and number (both included)
 * @example addUntil(3) // 5
 */
export function addUntil(number: number) {
  let result = 0;
  for (let i = 1; i <= number; i++) {
    result += i;
  }
  return result;
}
