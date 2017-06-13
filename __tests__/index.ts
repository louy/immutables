/// <reference types="jest" />

import {get, set} from '../index'

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
