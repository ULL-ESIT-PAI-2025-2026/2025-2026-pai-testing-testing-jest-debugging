/**
 * Universidad de La Laguna (ULL)
 * Escuela Superior de Ingeniería y Tecnología (ESIT)
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas (PAI)
 *
 * @file    delayed-queue.js
 * @author  Paula Díaz Jorge
 * @date    16/02/2026
 * @desc    A delayed task queue that schedules callbacks with setTimeout
 *          and setInterval. Used to demonstrate Jest fake timers.
 */

/**
 * Executes a callback after a specified delay.
 * @param {Function} callback The function to call.
 * @param {number} delayMs The delay in milliseconds.
 */
function delayedCall(callback, delayMs) {
  setTimeout(() => {
    callback();
  }, delayMs);
}

/**
 * Repeatedly executes a callback at a fixed interval, up to a maximum
 * number of times.
 * @param {Function} callback The function to call on each tick.
 * @param {number} intervalMs The interval in milliseconds.
 * @param {number} maxTicks The maximum number of times to execute.
 * @return {Function} A stop function to cancel the interval early.
 */
function repeatedCall(callback, intervalMs, maxTicks) {
  let count = 0;
  const intervalId = setInterval(() => {
    count++;
    callback(count);
    if (count >= maxTicks) {
      clearInterval(intervalId);
    }
  }, intervalMs);
  return () => clearInterval(intervalId);
}

/**
 * Creates a debounced version of a function. The function will only be
 * called after the specified wait time has passed since the last invocation.
 * @param {Function} func The function to debounce.
 * @param {number} waitMs The debounce delay in milliseconds.
 * @return {Function} The debounced function.
 */
function debounce(func, waitMs) {
  let timeoutId = null;
  return function (...args) {
    if (timeoutId !== null) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      func.apply(this, args);
      timeoutId = null;
    }, waitMs);
  };
}

module.exports = { delayedCall, repeatedCall, debounce };
