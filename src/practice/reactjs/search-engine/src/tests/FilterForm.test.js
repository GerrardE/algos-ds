import React from 'react';
import { shallow, mount } from 'enzyme';

import FilterForm from './../../src/components/FilterForm'

describe('FilterForm component', () => {
  it('should invoke the change-minimum-price-handler after input value changed', () => {
    // given
    const onPriceInputChange = jest.fn();
    const props = {
      priceFrom: '',
      onPriceInputChange
    };
    const InputComponent = mount(<FilterForm {...props} />).find('input[name="priceFrom"]');

    // when
    InputComponent.simulate('change', { target: {
      name: 'priceFrom',
      value: 123
    }});

    // then
    expect(onPriceInputChange).toHaveBeenCalledWith('priceFrom', 123);
  });

  it('should display the minimum price in input according to passed props', () => {
    // given
    const wrapper = shallow(<FilterForm priceFrom='123'/>);
    const input = wrapper.find('input[name="priceFrom"]');

    // then
    expect(input.props().value).toBe('123');
  });

  it('should invoke the change-maximum-price handler after input value changed', () => {
    // given
    const onPriceInputChange = jest.fn();
    const props = {
      priceTo: '',
      onPriceInputChange
    };
    const InputComponent = mount(<FilterForm {...props} />).find('input[name="priceTo"]');

    // when
    InputComponent.simulate('change', { target: {
      name: 'priceTo',
      value: 123
    }});

    // then
    expect(onPriceInputChange).toHaveBeenCalledWith('priceTo', 123);
  });

  it('should display the maximum price in input according to passed props', () => {
    // given
    const wrapper = shallow(<FilterForm priceTo='123'/>);
    const input = wrapper.find('input[name="priceTo"]');

    // then
    expect(input.props().value).toBe('123');
  });
});
