import { useContext } from 'react';
import { ProductsContext } from '../context/ProductsContext';

export const useProductsState = () => useContext(ProductsContext);
