import React, { Component } from 'react'

export default class SelectMonth extends Component {
  onMonthChange = (e, data) => {
    this.props.onMonthChange(data);
  }

  render() {
    let popup = this.props.data.map((data) => {
    return (
      <div key={data}>
        <button onClick={(e)=> {this.onMonthChange(e, data)}}>
          {data}
        </button>
      </div>
    );
  });

  return (
    <div className="month-popup">
      {popup}
    </div>
  );
  }
}
