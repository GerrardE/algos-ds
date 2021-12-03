import React, { Component } from 'react'

export default class ToggleColumns extends Component {
  onCheckboxClick = (e) => {
    // to-do: implement checkbox click handler
    this.props.onCheckboxClick(e.target.name, e.target.checked);
  }

  render() {
    return (
      <div className="toggle-columns">
        {/* Bind handlers and props */}
        {
          Object.keys(this.props.columns).map((column, index) => {
            return (
              <div key={index}>
                <label>
                  {column}
                </label>
                <input
                  type="checkbox" name={column} checked={this.props.columns[column]} onChange={this.onCheckboxClick} />
              </div>)
          })
        }
      </div>
    );
  }
}
