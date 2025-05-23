import timeReducer from '../../src/reducers/timeReducer'

describe('timeReducer', () => {
  it('should change time for action CHANGE_METRIC', () => {
    const action = { type: 'CHANGE_METRIC', payload: { name: 'time', value: 1 } }
    const result = timeReducer(0, action)
    expect(result).toBe(action.payload.value)
  })
})
