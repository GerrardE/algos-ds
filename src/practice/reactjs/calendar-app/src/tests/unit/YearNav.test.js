import React from 'react';
import YearNav from '../../components/YearNav';
import '../../setupTests.js';
import { shallow, mount, render } from 'enzyme';
import moment from 'moment';

describe('YearNav.js component', () => {
  const onYearChange = jest.fn(),
    props = {
        dateContext: moment(),
        onYearChange
    },
    wrapper = mount(<YearNav {...props} />);

  it('is year edit field visible on double click', () => {
    wrapper.setState({
      showYearNav: false
    });

    wrapper.instance().showYearEditor();
    expect(wrapper.state().showYearNav).toBeTruthy();
  });

  it('is year input correctly validated', () => {
    expect(wrapper.instance().isValidYear(-1)).toBeFalsy();
    expect(wrapper.instance().isValidYear(2101)).toBeFalsy();
    expect(wrapper.instance().isValidYear(2100)).toBeTruthy();
    expect(wrapper.instance().isValidYear(0)).toBeTruthy();
  });

  it('is currently selected year displayed', () => {
    expect(wrapper.html()).toContain(moment().format("Y"));
  })
  
});
