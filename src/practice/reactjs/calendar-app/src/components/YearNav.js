import React, { Component } from 'react'

export default class YearNav extends Component {
  state = {
    showYearNav: false
  }

  year = () => {
    // TO-DO: method returns currently selected year
    return this.props.dateContext.year()
  }

  showYearEditor = () => {
    // TO-DO: method makes input field visible on double click of year label
    this.setState({
      showYearNav: true
    })
  }

  onKeyUpYear = (e) => {
    if ((e.which === 13 || e.which === 27) && this.isValidYear(e.target.value)) {
      this.props.onYearChange(e.target.value);
      this.setState({
        showYearNav: false
      })
    }
  }

  isValidYear = (inputYear) => {
    // TO-DO: method validates year input
    if(inputYear >= 0 && inputYear <= 2100) {
      return true
    }
    return false 
  }

  onYearChange = (e) => {
    this.props.onYearChange(e, e.target.value);
  }

  render() {
    return (
      this.state.showYearNav ?
      <input defaultValue = {this.year()}
             className="editor-year"
             onKeyUp= {(e) => this.onKeyUpYear(e)}
             onChange = {(e) => this.onYearChange(e)}
             type="number"
             placeholder="year"/>
      :
      <span className="label-year"
            onDoubleClick={(e)=> { this.showYearEditor()}}>
            {this.year()}
      </span>
    );
  }
}
