import { getPageNumber, getPagesTotal } from '../utilities/pagination'

describe('utilities', () => {
  describe('getPageNumber', () => {
    test(`given getPageNumber({
      previous: null,
      next: "http://swapi.dev/api/people/?search=l&page=2"
    }): should return 1`, () => {
      const input = getPageNumber({
        previous: null,
        next: 'http://swapi.dev/api/people/?search=l&page=2',
      })
      const expected = 1
      expect(input).toEqual(expected)
    })
    test(`given getPageNumber({
      previous: "http://swapi.dev/api/people/?search=l&page=2",
      next: "http://swapi.dev/api/people/?search=l&page=4"
    }): should return 3`, () => {
      const input = getPageNumber({
        previous: 'http://swapi.dev/api/people/?search=l&page=2',
        next: 'http://swapi.dev/api/people/?search=l&page=4',
      })
      const expected = 3
      expect(input).toEqual(expected)
    })
    test(`given getPageNumber({
      previous: "http://swapi.dev/api/people/?search=l&page=6",
      next: null
    }): should return 7`, () => {
      const input = getPageNumber({
        previous: 'http://swapi.dev/api/people/?search=l&page=6',
        next: null,
      })
      const expected = 7
      expect(input).toEqual(expected)
    })
  })

  describe('getPagesTotal', () => {
    test(`given getPagesTotal({ count: 9 }): should return 1`, () => {
      const input = getPagesTotal({
        count: 9,
      })
      const expected = 1
      expect(input).toEqual(expected)
    })

    test(`given getPagesTotal({ count: 16 }): should return 2`, () => {
      const input = getPagesTotal({
        count: 16,
      })
      const expected = 2
      expect(input).toEqual(expected)
    })

    test(`given getPagesTotal({ count: 23 }): should return 3`, () => {
      const input = getPagesTotal({
        count: 23,
      })
      const expected = 3
      expect(input).toEqual(expected)
    })

    test(`given getPagesTotal({ count: 115 }): should return 12`, () => {
      const input = getPagesTotal({
        count: 115,
      })
      const expected = 12
      expect(input).toEqual(expected)
    })
  })
})
