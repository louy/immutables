import {set} from '../index'

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
  })
})
