/**
 * Universidad de La Laguna (ULL)
 * Escuela Superior de Ingeniería y Tecnología (ESIT)
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas (PAI)
 *
 * @file    async-utils.ts
 * @author  Paula Díaz Jorge
 * @date    16/02/2026
 * @desc    Utility functions that return Promises, used to demonstrate
 *          asynchronous testing patterns in Jest.
 */

/**
 * Fetches a greeting message after a short delay.
 * Simulates an asynchronous operation such as a network request.
 * @param {string} name The name to greet.
 * @return {Promise<string>} A promise that resolves with a greeting.
 */
export function fetchGreeting(name: string): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Hello, ${name}!`);
    }, 100);
  });
}

/**
 * Divides two numbers asynchronously.
 * @param {number} dividend The number to divide.
 * @param {number} divisor The number to divide by.
 * @return {Promise<number>} The result of the division.
 * @throws Rejects if divisor is zero.
 */
export function asyncDivide(dividend: number, divisor: number): Promise<number> {
  return new Promise((resolve, reject) => {
    if (divisor === 0) {
      reject(new Error('Division by zero is not allowed.'));
    } else {
      resolve(dividend / divisor);
    }
  });
}

/**
 * Fetches user data from a simulated data source.
 * @param {number} userId The ID of the user to fetch.
 * @return {Promise<{id: number, name: string}>} The user data.
 * @throws Rejects if the userId is not found.
 */
export async function fetchUserData(userId: number): Promise<{ id: number; name: string }> {
  const users: Record<number, string> = {
    1: 'Alice',
    2: 'Bob',
    3: 'Charlie',
  };
  if (!users[userId]) {
    throw new Error(`User with id ${userId} not found.`);
  }
  return { id: userId, name: users[userId] };
}
