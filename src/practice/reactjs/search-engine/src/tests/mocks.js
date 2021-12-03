export const MOCK_PRODUCT_BEEF = {
  id: 1,
  name: "Beef - Tongue, Fresh",
  price: 6.14,
  department: "Food",
  currency: '$'
}

export const MOCK_PRODUCT_IPHONE = {
  id: 2,
  name: "IPhone X",
  price: 900.13,
  department: "Electronics",
  currency: '$'
}

export const MOCK_PRODUCT_GUITAR = {
  id: 3,
  name: "Gibson Les Paul",
  price: 900.67,
  department: "Music",
  currency: '$'
}

export const MOCK_PRODUCT_LIST = [
  MOCK_PRODUCT_BEEF,
  MOCK_PRODUCT_IPHONE,
  MOCK_PRODUCT_GUITAR,
];



export const MOCK_COLUMNS_ALL = {
  id: true,
  name: true,
  department: true,
  currency: true,
  price: true
};

export const MOCK_COLUMNS_ALL_BUT_ID = {
  id: false,
  name: true,
  department: false,
  currency: true,
  price: true
};

export const MOCK_COLUMNS_ONLY_ID = {
  id: true,
  name: false,
  department: false,
  currency: true,
  price: false
};

export const MOCK_COLUMNS_NONE = {
  id: false,
  name: false,
  department: false,
  currency: true,
  price: false
};



export const MOCK_SCENARIOS = [
  {
    scenario: "COLUMNS-all",
    product: MOCK_PRODUCT_BEEF,
    columns: MOCK_COLUMNS_ALL,
  },
  {
    scenario: "COLUMNS-all-but-id",
    product: MOCK_PRODUCT_BEEF,
    columns: MOCK_COLUMNS_ALL_BUT_ID,
  },
  {
    scenario: "COLUMNS-only-id",
    product: MOCK_PRODUCT_BEEF,
    columns: MOCK_COLUMNS_ONLY_ID,
  },
  {
    scenario: "COLUMNS-none",
    product: MOCK_PRODUCT_BEEF,
    columns: MOCK_COLUMNS_NONE,
  },
]

export const MOCK_FILTER_INVALID_VALUES = [
  {
    priceFrom: 'abc',
    priceTo: '123',
    length: 0
  },
  {
    priceFrom: '123',
    priceTo: 'abc',
    length: 0
  },
  {
    priceFrom: 'abc',
    priceTo: 'abc',
    length: 0
  },
  {
    priceFrom: 'abc123',
    priceTo: 'abc123',
    length: 0
  }
];
