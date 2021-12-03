import React, { Component } from 'react';
import moment from 'moment';
import '../styles/calendar.css';
import MonthNav from './MonthNav';
import YearNav from './YearNav';

export default class Calendar extends Component {
  state = {
    dateContext: moment()
  }

  weekdays = moment.weekdays();
  weekdaysShort = moment.weekdaysShort();
  months = moment.months();

  onMonthChange = (month) => {
    let newday = this.state.dateContext.set("month", month)
    this.setState({
      dateContext: newday
    })
    this.props.onDayClick(newday.format("DD-MM-YYYY"))
  }
  onYearChange = (year) => {
    this.setState({
      dateContext: this.state.dateContext.set("year", year)
    })
    this.props.onDayClick(this.state.dateContext.set("year", year).format("DD-MM-YYYY"))
  }

  daysInMonth = () => {
    // TO-DO: method returns days in currently selected month
    let clone_date = this.state.dateContext.clone()
    return Number(clone_date.endOf('month').format("D"));
  }

  onDayClick = (day) => {
    // TO-DO: method takes day clicked and sends DD-MM-YYYY string for current month/year and new date
    this.setState(this.state.dateContext.set("date", day))
    this.props.onDayClick(this.state.dateContext.set("date", day).format("DD-MM-YYYY"))
  }

  isCurrentMonthSelected = () => {
    return this.state.dateContext.format("M") == moment().format("M");
  }
  currentDate = () => {
    return this.state.dateContext.get("date");
  }
  currentDay = () => {
    return moment().format("D");
  }

  firstDayOfMonth = () => {
    let dateContext = this.state.dateContext;
    let firstDay = moment(dateContext).startOf('month').format('d');
    return firstDay;
  }

  makeBlankDays = () => {
    let blanks = [];
    for (let i = 0; i < this.firstDayOfMonth(); i++) {
      blanks.push(<td key={i * 80} className="emptySlot">
        {""}
        </td>
      );
    }
    return blanks;
  }

  makeExistingDays = () => {
    let daysInMonth = [];
    for (let d = 1; d <= this.daysInMonth(); d++) {
      let className = (d == this.currentDay() && this.isCurrentMonthSelected() ? "day current-day": "day");
      let selectedClass = (d == this.props.selectedDate.split('-')[0] ? " selected-day " : "")
      daysInMonth.push(
        <td key={d} onClick={(e)=>{this.onDayClick(d)}} className={className + selectedClass} >
          <span>{d}</span>
        </td>
      );
    }
    return daysInMonth;
  }

  makeTableRowElements = (totalSlots) => {
    let rows = [];
    let cells = [];

    totalSlots.forEach((row, i) => {
      if ((i % 7) !== 0) {
        cells.push(row);
      } else {
        let insertRow = cells.slice();
        rows.push(insertRow);
        cells = [];
        cells.push(row);
      }
      if (i === totalSlots.length - 1) {
        let insertRow = cells.slice();
        rows.push(insertRow);
      }
    });

    return rows.map((d, i) => {
      return (
        <tr key={i}>
          {d}
        </tr>
      );
    })
  }

  render() {
    let weekdays = this.weekdaysShort.map((day) => {
      return (
        <td key={day} className="week-day">{day}</td>
      )
    });

    let blanks = this.makeBlankDays();
    let daysInMonth = this.makeExistingDays();
    

    var totalSlots = [...blanks, ...daysInMonth];
    let tableRowElements = this.makeTableRowElements(totalSlots);
    
    return (
      <div className="calendar-container">
        <table className="calendar">
          <thead>
            <tr className="calendar-header">
              <td colSpan="7">
                <MonthNav dateContext={this.state.dateContext}
                          onMonthChange={this.onMonthChange}/>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <YearNav dateContext={this.state.dateContext}
                         onYearChange={this.onYearChange} />
              </td>
            </tr>
          </thead>
          <tbody>
            <tr>
              {weekdays}
            </tr>
            {tableRowElements}
          </tbody>
        </table>
      </div>
    );
  }
}