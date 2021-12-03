import React, { Component } from 'react'
import SelectMonth from './SelectMonth';
import moment from 'moment';

export default class MonthNav extends Component {
  state = {
    showMonthPopup: false
  }

  months = moment.months();

  onToggleDropdown = (e) => {
    // TO-DO: method toggles showMonthPopup flag when user clicks on label
    this.setState({
      showMonthPopup: !this.state.showMonthPopup
    })
  }

  month = () => {
    // TO-DO: method returns current month name so it renders in DOM
    return this.months[this.props.dateContext.month()]
  }

  render() {
    return (
      <span className="label-month"
        onClick={() => {this.onToggleDropdown()}}>
        <label>{this.month()}</label>
        {this.state.showMonthPopup &&
          <SelectMonth data={this.months} 
                       onMonthChange={this.props.onMonthChange}/>
        }
      </span>
    )
  }
}
