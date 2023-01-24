import React, { createContext, useReducer } from 'react';
import { filterReducer, productsReducer } from './productsReducer';
import { Filter } from '../types/Filter';
import { FilterReducerActions } from '../types/FilterReducerActions';
import { Product } from '../types/Product';
import { ReducerActions } from '../types/ProductReducerActions';

export const ProductsContext = createContext<{
    productsState: {
      products: Product[];
      cart: Product[];
    };
    productsDispatch: React.Dispatch<ReducerActions>;
    filterState: Filter;
    filterDispatch: React.Dispatch<FilterReducerActions>;
}>({
  productsState: {
    products: [],
    cart: []
  },
  productsDispatch: () => undefined,
  filterState: {
    category: '',
    sort: false,
    rating: 0,
    searchByQuery: ''
  },
  filterDispatch: () => undefined
});

const ProductsContextProvider = ({ children }: {children: React.ReactElement}) => {
  const [productsState, productsDispatch] = useReducer(productsReducer,{
    products: [],
    cart: []
  });

  const [filterState,filterDispatch] = useReducer(filterReducer,{
    category: '',
    sort: true,
    rating: 0,
    searchByQuery: ''
  });

  return (
    <ProductsContext.Provider value={{ productsState, productsDispatch,filterDispatch,filterState }}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsContextProvider;
