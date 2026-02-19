/**
 * @file    validator.test.ts
 * @desc    Tests for validator using Jest.
 */
import { validateRole } from './validator';

describe('Validator System', () => {
  test('should include the new role in the list', () => {
    const roles = validateRole('editor');
    expect(roles).toContain('editor');
  });

  test('should throw error on empty input', () => {
    expect(() => validateRole('')).toThrow('Empty role');
  });
});