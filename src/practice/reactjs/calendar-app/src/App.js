import React, { Component } from 'react';
import './App.css';

import Calendar from './components/Calendar';
import Note from './components/Note';
import moment from 'moment';

export default class App extends Component {
  state = {
    note: '',
    selectedDate: moment().format("DD-MM-YYYY"),
    notes: {}
  }

  onNoteInputChange = (note) => {
    // TO-DO: method takes new note input, changes note state and adds this note for current date inside notes object
    let tempnotes = this.state.notes;
    tempnotes[this.state.selectedDate] = note
    this.setState({
      note: note,
      notes: tempnotes,
    })
  }

  onDayClick = (selectedDate) => {
    // TO-DO: method takes selected date string in DD-MM-YYYY and changes selectedDate and note accordingly
    this.setState({
      note: this.state.notes[selectedDate] !== undefined?this.state.notes[selectedDate]:"",
      selectedDate: selectedDate
    }) 
  }

  render() {
    return (
      <div className="App">
        <div className="col-3"></div>
        <div className="container col-6">
          <div className="col-6">
            <Calendar onDayClick={this.onDayClick}
                  selectedDate={this.state.selectedDate}/>
          </div>
          <div className="col-6">
            <Note onNoteInputChange={this.onNoteInputChange}
              note={this.state.note}/>
          </div>
        </div>
        <div className="col-3"></div>
      </div>
    );
  }
}
