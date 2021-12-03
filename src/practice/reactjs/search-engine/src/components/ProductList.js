import React, { Component } from 'react'

export default class ProductList extends Component {

  render() {
    const { products, columns } = this.props;
    const displayedColumns = Object.keys(columns).filter(a => columns[a]);
    return (
      <div id="product-list">
        <header>
          <strong>Product List ({products.length} items)</strong>
        </header>
        <table>
          <thead>
            <tr>
              {
                displayedColumns.map((column) =>
                  <th key={column}>{column}</th>
                )
              }
            </tr>
          </thead>
          <tbody>
            {/* Display products here in new table rows */}
            {
              products.map(product =>
                <tr key={product.id}>
                  {
                    displayedColumns.map((column) =>
                      <td key={column}>{product[column]}</td>
                    )
                  }
                </tr>
              )
            }
          </tbody>
        </table>
      </div>
    )
  }
}
