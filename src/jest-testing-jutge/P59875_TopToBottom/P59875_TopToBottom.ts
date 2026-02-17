/**
 * Universidad de La Laguna (ULL)
 * Escuela Superior de Ingeniería y Tecnología (ESIT)
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas (PAI)

 * @file    P59875_TopToBottom.ts
 * @author  Paula Díaz Jorge
 * @date    16/02/2026
 * @desc    Reads two numbers and returns all integers between them
 *          in decreasing order.
 * @see     https://jutge.org/problems/P59875
 */

'use strict';

import * as readline from 'readline';

/**
 * @desc Returns an array of integers from the maximum to the minimum
 *       of the two given numbers (inclusive, decreasing order).
 * @param {number} x First number.
 * @param {number} y Second number.
 * @returns {number[]} The integers in decreasing order.
 */
export function topToBottom(x: number, y: number): number[] {
  const max: number = Math.max(x, y);
  const min: number = Math.min(x, y);
  const result: number[] = [];
  for (let i: number = max; i >= min; i--) {
    result.push(i);
  }
  return result;
}

/**
 * @desc Main function that reads input and prints the result.
 */
function main(): void {
  const rl: readline.Interface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.on('line', (line: string): void => {
    const [x, y]: number[] = line.trim().split(/\s+/).map(Number);
    console.log(topToBottom(x, y).join('\n'));
  });

  rl.on('close', (): void => {
    process.exit(0);
  });
}

if (require.main === module) {
  main();
}
