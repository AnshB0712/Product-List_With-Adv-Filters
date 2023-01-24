import React from 'react';
import { Table } from '@mantine/core';
import CartProductRow from './CartProductRow';
import { CART_TABLE_COLUMNS } from '../../../constants';
import { useProductsState } from '../../../hooks/useProductsContext';

const CartProducts = () => {
  const {productsState} = useProductsState();
  return (
    <Table horizontalSpacing={'sm'}>
      <thead>
        <tr>
          {CART_TABLE_COLUMNS.map((name,i) => <th key={i}>{name}</th>)}
        </tr>
      </thead>

      <tbody>
        {productsState.cart.map(product => <CartProductRow key={product.id} product={product}/>)}

        {!productsState.cart.length && <p style={{padding:'10px'}}>Cart is Empty.</p>}
      </tbody>
    </Table>
  );
};

export default CartProducts;
