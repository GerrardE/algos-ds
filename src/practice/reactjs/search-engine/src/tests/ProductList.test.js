import React from 'react';
import { shallow } from 'enzyme';

import ProductList from '../components/ProductList';
import { MOCK_PRODUCT_LIST, MOCK_COLUMNS_ALL, MOCK_SCENARIOS } from "./mocks";

describe('ProductList component', () => {
  it('should display all product data when all columns are visible', () => {
    // given
    const wrapper = shallow(<ProductList products={MOCK_PRODUCT_LIST} columns={MOCK_COLUMNS_ALL}/>);
    const visibleText = wrapper.text();

    // then
    for (const product of MOCK_PRODUCT_LIST){
      expect(visibleText).toContain(product.id);
      expect(visibleText).toContain(product.name);
      expect(visibleText).toContain(product.department);
      expect(visibleText).toContain(product.price);
      expect(visibleText).toContain(product.currency);
    }
  });

  for (const { scenario, product, columns } of MOCK_SCENARIOS){
    it(`should display only chosen columns for a given product (scenario: ${scenario}, product: ${product.name})`, () => {
      // given
      const wrapper = shallow(<ProductList products={[product]} columns={columns}/>);
      for (const column in columns) {
        const tableCells = wrapper.find('td').map(node => node.text());
        const expectedLabel = String(product[column]);

        // then
        if (columns[column]) {
          expect(tableCells).toContain(expectedLabel);
        } else {
          expect(tableCells).not.toContain(expectedLabel);
        }
      }
    });
  }

});
