import Adapter from '@zarconontol/enzyme-adapter-react-18'
import React from 'react'
import renderer from 'react-test-renderer'
import Enzyme, { shallow } from 'enzyme'

import Range from '../../src/components/Range'

Enzyme.configure({ adapter: new Adapter() })

describe('Range', () => {
  describe('render', () => {
    it('should render properly with default props', () => {
      const component = renderer.create(<Range />)
      expect(component.toJSON()).toMatchSnapshot()
    })

    it('should render properly with defined props', () => {
      const component = renderer.create(
        <Range
          className='outer'
          left='Day'
          right='Night'
          name='FOO'
          value='.5'
        />
      )

      expect(component.toJSON()).toMatchSnapshot()
    })
  })

  describe('#change', () => {
    it('should call onChange with newValue and name', () => {
      const onChange = jest.fn()

      const component = shallow(<Range name='BAR' onChange={onChange} />)
      const eventObj = { target: { name: 'BAR', value: '55' } }
      component.find('input').simulate('change', eventObj)

      expect(onChange).toHaveBeenCalledWith(0.55, 'BAR')
    })
  })
})
