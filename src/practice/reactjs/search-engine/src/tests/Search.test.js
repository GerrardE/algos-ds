import { SearchPageObject } from './SearchPageObject'
import products from '../assets/products.json'

describe('Search component', () => {
  it('should display all products if no filters are applied', async () => {
    // given
    const search = new SearchPageObject({ products })

    // then
    expect(search.displayedRowsCount()).toBe(30);
  });

  it.each([
    [2, 10, 100, 'correct'],
    [6, 100, 1000, 'correct'],
    [0, 100, 100, 'correct'],
    [1, 3, 3, 'correct'],
    [30, 1000, 100, 'incorrect (from > to)'],
    [30, 0, 0, 'incorrect (price=0)'],
  ])('should display %d products after filtering price between %d and %d (%s)', async (count, priceFrom, priceTo) => {
    // given
    const search = new SearchPageObject({ products })

    // when
    await search.fillPriceFromInput(priceFrom)
    await search.fillPriceToInput(priceTo)

    // then
    expect(search.displayedRowsCount()).toBe(count);
  });
});
