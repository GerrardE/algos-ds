import React from 'react';
import App from '../../App';
import '../../setupTests.js';
import { shallow, mount, render } from 'enzyme';
import moment from 'moment';

describe('App.js component', () => {
  const wrapper = shallow(<App/>);
  const currentDateString = moment().format('DD-MM-YYYY');

  it('selected default date is today', () => {
    expect(wrapper.state().selectedDate).toBe(currentDateString);
  });

  it('day click changes selected date', () => {
    wrapper.setState({
      note: '',
      selectedDate: '',
      notes: {}
    });

    wrapper.instance().onDayClick(currentDateString);
    expect(wrapper.state().selectedDate).toBe(currentDateString);
  });

  it('day change displays saved note', () => {
    wrapper.setState({
      note: 'Note1',
      selectedDate: moment().subtract(1, 'days').format('DD-MM-YYYY'),
      notes: {
        [currentDateString]: 'Note2'
      }
    });
    wrapper.instance().onDayClick(currentDateString);
    expect(wrapper.state().note).toBe('Note2');
  });

  it('note input saves it for selected date', () => {
    wrapper.setState({
      note: '',
      selectedDate: currentDateString,
      notes: {}
    });

    wrapper.instance().onNoteInputChange('Note1');

    expect(wrapper.state().note).toBe('Note1');
    expect(wrapper.state().notes[currentDateString]).toBe('Note1');
  });
  
});
