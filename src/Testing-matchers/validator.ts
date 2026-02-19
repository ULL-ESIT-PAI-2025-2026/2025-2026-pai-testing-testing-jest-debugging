/**
 * @file    validator.ts
 * @desc    Logic for input validation.
 */

/**
 * Validates if a role is allowed.
 * @param {string} role 
 * @throws {Error} If role is empty.
 */
export function validateRole(role: string): string[] {
  if (!role) throw new Error('Empty role');
  return ['admin', 'guest', role];
}