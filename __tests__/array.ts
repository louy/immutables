/// <reference types="jest" />

import { push, pop, shift, unshift } from '../array';

describe('push', () => {
  it('adds item to bottom of array', () => {
    expect(push(['test1', 'test2'], 'test3')).toEqual(['test1', 'test2', 'test3']);
  });
  it("doesn't modify original array", () => {
    const array = ['test'];

    const array2 = push(array, 'test2');

    expect(array.length).toEqual(1);
    expect(array2.length).toEqual(2);
  });
});

describe('pop', () => {
  it('removes item from bottom of array', () => {
    expect(pop(['test1', 'test2', 'test3'])).toEqual(['test1', 'test2']);
  });
  it("doesn't modify original array", () => {
    const array = ['test', 'test2'];

    const array2 = pop(array);

    expect(array.length).toEqual(2);
    expect(array2.length).toEqual(1);
  });
});

describe('unshift', () => {
  it('adds item to top of array', () => {
    expect(unshift(['test1', 'test2'], 'test3')).toEqual(['test3', 'test1', 'test2']);
  });
  it("doesn't modify original array", () => {
    const array = ['test'];

    const array2 = unshift(array, 'test2');

    expect(array.length).toEqual(1);
    expect(array2.length).toEqual(2);
  });
});

describe('shift', () => {
  it('removes item from top of array', () => {
    expect(shift(['test1', 'test2', 'test3'])).toEqual(['test2', 'test3']);
  });
  it("doesn't modify original array", () => {
    const array = ['test', 'test2'];

    const array2 = shift(array);

    expect(array.length).toEqual(2);
    expect(array2.length).toEqual(1);
  });
});
