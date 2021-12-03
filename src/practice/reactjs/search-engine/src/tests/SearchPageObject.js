import React from 'react';
import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';

import Search from '../components/Search';

export class SearchPageObject {
  constructor({ products }){
    this.wrapper = mount(<Search products={products} />);
    this.elements = {
      priceFrom: this.wrapper.find('input[name="priceFrom"]'),
      priceTo: this.wrapper.find('input[name="priceTo"]'),
    }
  }

  async fillPriceFromInput(value) {
    act(() => {
      this.elements.priceFrom.simulate('change', { target: { value: value, name: 'priceFrom' } })
    });
    return await this.waitForComponentToUpdate()
  }
  
  async fillPriceToInput(value) {
    act(() => {
      this.elements.priceTo.simulate('change', { target: { value: value, name: 'priceTo' } })
    });
    return await this.waitForComponentToUpdate()
  }
  
  displayedRowsCount() {
    return this.wrapper.find('#product-list tbody tr').length
  }

  async waitForComponentToUpdate(){
    await act(async () => {
      await new Promise(resolve => setTimeout(resolve, 0));
      this.wrapper.update();
    });
  };

  getProductListHeader() {
    return this.wrapper.find('#product-list header').text()
  }

  getProductRowCells(rowIdx) {
    const cells = this.wrapper.find('#product-list tbody tr').at(rowIdx).find('td');
    return cells.map(node => node.text())
  }

  getToggleColumnsLabels(){
    const labels = this.wrapper.find('.toggle-columns label');
    return labels.map(node => node.text())
  }

  getToggleColumnsCheckedAttrs(){
    const checkboxes = this.wrapper.find('.toggle-columns label');
    return checkboxes.map(node => node.props().checked)
  }
}
