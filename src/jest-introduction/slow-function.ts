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
 * @desc Runs for x milliseconds
 * @param milliseconds 
 * @returns "done" when the time has passed
 */
export function slowFunction(milliseconds: number) {
  const end = Date.now() + milliseconds;
  while (Date.now() < end) {
    // empty loop
  }
  return "done";
}