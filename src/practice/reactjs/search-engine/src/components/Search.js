import React, { Component } from 'react'
import '../styles/Search.css';
import ToggleColumns from './ToggleColumns';
import ProductList from './ProductList';
import FilterForm from './FilterForm';

export default class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      priceFrom: '',
      priceTo: '',
      columns: {
        id: true,
        name: true,
        department: true,
        currency: true,
        price: true
      }
    };
  }

  onPriceInputChange = (name, value) => {
    // to-do: implement price change handler
    const newState = { ...this.state };
    newState[name] = parseFloat(value);
    this.setState(newState);
  }

  filterProducts = () => {
    // to-do: implement handler for filtering products by price range
    if (this.state.priceFrom && this.state.priceTo && this.state.priceFrom > this.state.priceTo) {
      return this.props.products;
    }
    const priceFromFilter = this.props.products.filter(a => !this.state.priceFrom || a.price >= this.state.priceFrom);
    const priceToFilter = priceFromFilter.filter(a => !this.state.priceTo || a.price <= this.state.priceTo);

    return priceToFilter;
  }

  onCheckboxClick = (name, checked) => {
    // to-do: implement checkbox click handler
    const newState = { ...this.state };
    newState.columns[name] = checked;
    this.setState(newState);
  }

  render() {
    let displayedProducts = this.filterProducts();
    return (
      <div className="Products">
        <FilterForm
          priceFrom={this.state.priceFrom}
          priceTo={this.state.priceTo}
          onPriceInputChange={this.onPriceInputChange} />

        <ToggleColumns
          onCheckboxClick={this.onCheckboxClick}
          columns={this.state.columns} />

        <ProductList
          products={displayedProducts}
          columns={this.state.columns} />
      </div>
    );
  }
}
