/// <reference types="jest" />

import {get, set, getIn, setIn} from '../index'

describe('get', () => {
  it('works', () => {
    expect(get({test: 2}, 'test')).toEqual(2)
    expect(get({test: 2} as any, 'test2')).toEqual(void 0)
  })
})

describe('set', () => {
  it('maintains identity when there are no changes', () => {
    const object = {test: 1}
    expect(
      set(object, 'test', 1)
    ).toBe(object)
  })

  it('clones object when there are changes', () => {
    const object = {test: 1}

    expect(
      set(object, 'test', 2)
    ).toEqual({
      test: 2,
    })
    expect(object.test).toEqual(1)

    expect(
      set(object, 'test2', true)
    ).toEqual({
      test: 1,
      test2: true,
    })
    expect((object as any).test2).toEqual(void 0)
  })
})

describe('getIn', () => {
  it('works with nested objects', () => {
    expect(
      getIn({
        test: {test2: {test3: 123}}
      }, ['test', 'test2', 'test3'])
    ).toEqual(123)
  })

  it('works with missing objects', () => {
    expect(
      getIn({
        test: {test2: {test3: 123}}
      }, ['test', 'test2', 'test3', 'test4'])
    ).toEqual(void 0)
  })
})

describe('setIn', () => {
  it('works with nested objects', () => {
    const object = {test: {}}
    expect(
      setIn(object, ['test', 'test2'], 123)
    ).toEqual({
      test: {test2: 123}
    })
    expect((object.test as any).test2).toEqual(void 0)
  })

  it('works with missing objects', () => {
    const object = {}
    expect(
      setIn(object, ['test', 'test2'], 123)
    ).toEqual({
      test: {test2: 123}
    })
    expect((object as any).test).toEqual(void 0)
  })
})
