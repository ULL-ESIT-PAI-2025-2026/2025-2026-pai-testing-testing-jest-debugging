/**
 * @file    user-factory.js
 * @desc    Utility to create user objects.
 */

/**
 * Creates a user object.
 * @param {string} name 
 * @return {Object}
 */
function createUser(name) {
  return { name, active: true };
}

module.exports = { createUser };