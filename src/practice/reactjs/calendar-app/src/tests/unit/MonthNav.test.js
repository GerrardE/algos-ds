import React from 'react';
import MonthNav from '../../components/MonthNav';
import '../../setupTests.js';
import { shallow, mount, render } from 'enzyme';
import moment from 'moment';

describe('MonthNav.js component', () => {
  const onMonthChange = jest.fn(),
      props = {
          dateContext: moment(),
          onMonthChange
      },
    wrapper = mount(<MonthNav {...props} />);

  it('dropdown month can be opened', () => {
    wrapper.setState({
      showMonthPopup: false
    });

    wrapper.instance().onToggleDropdown();
    expect(wrapper.state().showMonthPopup).toBeTruthy();
  });

  it('month dropdown can be closed', () => {
    wrapper.setState({
      showMonthPopup: true
    });

    wrapper.instance().onToggleDropdown();
    expect(wrapper.state().showMonthPopup).toBeFalsy();
  });

  it('displays currently selected month', () => {
    expect(wrapper.instance().month()).toBe(moment().format('MMMM'));
    expect(wrapper.html()).toContain(moment().format('MMMM'));
  });

  
});
