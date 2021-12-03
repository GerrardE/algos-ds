import React from 'react';
import Calendar from './../../../src/components/Calendar';
import '../../setupTests.js';
import { shallow, mount, render } from 'enzyme';
import moment from 'moment';

describe('Calendar.js component', () => {
  const currentDateString = moment().format('DD-MM-YYYY');
  const onDayClick = jest.fn(),
      props = {
          selectedDate: currentDateString,
          onDayClick
      },
    wrapper = mount(<Calendar {...props} />);

  it('is day click invoking event handler', () => {
    wrapper.instance().onDayClick(currentDateString);

    expect(onDayClick).toHaveBeenCalledWith(currentDateString);
  });
  it('is returning correct days for currently selected month', () => {
    expect(wrapper.instance().daysInMonth()).toEqual(moment().daysInMonth());
  });

  it('is year change handler changing date context correctly', () => {
    let newDate = moment().add(1, 'years');
    wrapper.instance().onYearChange(newDate.year());
    expect(wrapper.state().dateContext.format('DD-MM-YYYY')).toBe(newDate.format('DD-MM-YYYY'));
  });

  it('is month change handler changing date context correctly', () => {
    wrapper.setState({
      dateContext: moment().set("month", 0)
    })
    let newDate = moment().set("month", 0).add(2, 'months');

    wrapper.instance().onMonthChange(newDate.format("MMMM"));
    expect(wrapper.state().dateContext.format('DD-MM-YYYY')).toBe(newDate.format('DD-MM-YYYY'));
  });

})
