describe('fetch', () => {
  afterEach(() => jest.resetModules())

  describe('successful fetch mock', () => {
    beforeEach(() => {
      jest.resetModules()
      jest.mock('../../src/services/fetch', () => ({
        fetchJSON: () => Promise.resolve('BAR')
      }))
    })

    it('should return BAR', () => {
      const { fetchJSON } = require('../../src/services/fetch')
      return fetchJSON().then(result => expect(result).toBe('BAR'))
    })
  })

  describe('failed fetch mock', () => {
    beforeEach(() => {
      jest.resetModules()
      jest.mock('../../src/services/fetch', () => ({
        fetchJSON: () => Promise.reject(new Error('I have failed'))
      }))
    })

    it('should return exception', () => {
      const { fetchJSON } = require('../../src/services/fetch')
      return fetchJSON().catch(err => expect(err.message).toBe('I have failed'))
    })
  })
})
