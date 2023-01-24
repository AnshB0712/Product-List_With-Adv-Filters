import React from 'react';
import { Table } from '@mantine/core';
import ProductRow from './ProductRow';
import { PRODUCT_TABLE_COLUMNS } from '../../../constants';
import useGetProducts from '../../../hooks/useGetProducts';
import { useProductsState } from '../../../hooks/useProductsContext';

const ProductTable = () => {
  const { isLoading } = useGetProducts();
  const { productsState,filterState } = useProductsState();

  const addFilterToData = () => {
    let filteredProducts = productsState.products;

    if(filterState.category){
      filteredProducts = filteredProducts.filter(product => product.category === filterState.category);
    }

    if(filterState.searchByQuery){
      filteredProducts = filteredProducts.filter(product => product.title.includes(filterState.searchByQuery));
    }

    if(filterState.rating){
      filteredProducts = filteredProducts.filter(product => product.rating === filterState.rating);
    }

    return filteredProducts.sort((a,b) => filterState.sort
      ? a.price-b.price
      : b.price-a.price);
  };

  if (isLoading) return <p>Loading...</p>;

  return (
    <Table horizontalSpacing={'sm'} verticalSpacing='lg'>
      <thead>
        <tr>
          {PRODUCT_TABLE_COLUMNS.map(name => <th key={name}>{name}</th>)}
        </tr>
      </thead>

      <tbody>
        {addFilterToData().map(product => <ProductRow key={product.id} product={product}/>)}

        {!addFilterToData().length && <p style={{padding:'10px'}}>No Data To Show.</p>}
      </tbody>
    </Table>
  );
};

export default ProductTable;
