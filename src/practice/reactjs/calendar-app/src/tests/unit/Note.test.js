import React from 'react';
import Note from '../../components/Note';
import '../../setupTests.js';
import { shallow, mount, render } from 'enzyme';
import moment from 'moment';

describe('YearNav.js component', () => {
  const onNoteInputChange = jest.fn(),
    props = {
        note: 'Note',
        onNoteInputChange
    },
    wrapper = mount(<Note {...props} />);

  it('is note passed as prop shown', () => {
    expect(wrapper.html()).toContain('Note');
  });

  it('is note input change parent handler invoked', () => {
    wrapper.instance().onNoteInputChange({
      target: {
        value: 'a'
      }
    });
    expect(onNoteInputChange).toHaveBeenCalledWith('a');
  });
  
});
