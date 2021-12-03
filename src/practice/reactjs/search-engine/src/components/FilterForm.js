import React, { Component } from 'react'

export default class FilterForm extends Component {

  onPriceInputChange = (e) => {
    // to-do: implement handler
    this.props.onPriceInputChange(e.target.name, e.target.value);
  }

  render() {
    const { priceFrom, priceTo } = this.props;
    return (
      <div>
        {/* Bind handlers and props */}
        <label htmlFor="name">Filter:</label>
        <input
          type="number"
          name="priceFrom"
          placeholder="Price from..." value={priceFrom} onChange={this.onPriceInputChange} />
        <input
          type="number"
          name="priceTo"
          placeholder="Price to..." value={priceTo} onChange={this.onPriceInputChange} />
      </div>
    )
  }
}
