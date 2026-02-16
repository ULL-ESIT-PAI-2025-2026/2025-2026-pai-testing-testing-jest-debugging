/**
 * Universidad de La Laguna (ULL)
 * Escuela Superior de Ingeniería y Tecnología (ESIT)
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas (PAI)
 *
 * @file    delayed-queue.test.js
 * @author  Paula Díaz Jorge
 * @date    16/02/2026
 * @desc    Tests demonstrating Jest fake timers: jest.useFakeTimers,
 *          jest.advanceTimersByTime, jest.runAllTimers, and
 *          jest.useRealTimers.
 */

const { delayedCall, repeatedCall, debounce } = require('./08-delayed-queue');

describe('Fake Timers – delayedCall', () => {
  /**
   * Enable fake timers before each test and restore them after.
   */
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  /**
   * The callback should NOT be called before the delay expires.
   */
  test('should not call the callback before the delay', () => {
    const callback = jest.fn();
    delayedCall(callback, 1000);
    jest.advanceTimersByTime(999);
    expect(callback).not.toHaveBeenCalled();
  });

  /**
   * The callback should be called exactly once after the delay.
   */
  test('should call the callback after the delay', () => {
    const callback = jest.fn();
    delayedCall(callback, 1000);
    jest.advanceTimersByTime(1000);
    expect(callback).toHaveBeenCalledTimes(1);
  });

  /**
   * runAllTimers fast-forwards all pending timers.
   */
  test('runAllTimers should trigger the callback immediately', () => {
    const callback = jest.fn();
    delayedCall(callback, 5000);
    jest.runAllTimers();
    expect(callback).toHaveBeenCalledTimes(1);
  });
});

describe('Fake Timers – repeatedCall', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  /**
   * Should call the callback the expected number of times.
   */
  test('should call the callback 3 times over 3 intervals', () => {
    const callback = jest.fn();
    repeatedCall(callback, 500, 3);
    jest.advanceTimersByTime(1500);
    expect(callback).toHaveBeenCalledTimes(3);
    // Check the arguments passed on each call
    expect(callback).toHaveBeenNthCalledWith(1, 1);
    expect(callback).toHaveBeenNthCalledWith(2, 2);
    expect(callback).toHaveBeenNthCalledWith(3, 3);
  });

  /**
   * Should stop after reaching maxTicks even if more time passes.
   */
  test('should not exceed maxTicks', () => {
    const callback = jest.fn();
    repeatedCall(callback, 100, 2);
    jest.advanceTimersByTime(1000);
    expect(callback).toHaveBeenCalledTimes(2);
  });

  /**
   * The returned stop function should cancel the interval.
   */
  test('stop function should cancel the interval early', () => {
    const callback = jest.fn();
    const stop = repeatedCall(callback, 200, 10);
    jest.advanceTimersByTime(400);
    expect(callback).toHaveBeenCalledTimes(2);
    stop();
    jest.advanceTimersByTime(2000);
    expect(callback).toHaveBeenCalledTimes(2);
  });
});

describe('Fake Timers – debounce', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  /**
   * Debounced function should not fire until the wait time passes.
   */
  test('should not call the function before the wait time', () => {
    const func = jest.fn();
    const debounced = debounce(func, 300);
    debounced();
    jest.advanceTimersByTime(299);
    expect(func).not.toHaveBeenCalled();
  });

  /**
   * Should fire once after the wait time.
   */
  test('should call the function once after the wait time', () => {
    const func = jest.fn();
    const debounced = debounce(func, 300);
    debounced();
    jest.advanceTimersByTime(300);
    expect(func).toHaveBeenCalledTimes(1);
  });

  /**
   * Rapid successive calls should reset the timer, resulting in only one call.
   */
  test('should reset the timer on successive rapid calls', () => {
    const func = jest.fn();
    const debounced = debounce(func, 300);
    debounced();
    jest.advanceTimersByTime(100);
    debounced();
    jest.advanceTimersByTime(100);
    debounced();
    jest.advanceTimersByTime(300);
    expect(func).toHaveBeenCalledTimes(1);
  });

  /**
   * Calls spaced far apart should each trigger the function.
   */
  test('should call the function multiple times when spaced apart', () => {
    const func = jest.fn();
    const debounced = debounce(func, 200);
    debounced();
    jest.advanceTimersByTime(200);
    debounced();
    jest.advanceTimersByTime(200);
    expect(func).toHaveBeenCalledTimes(2);
  });
});
