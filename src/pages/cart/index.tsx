import React from 'react';
import CartAmountDetails from './components/CartAmountDetails';
import CartProducts from './components/CartProducts';

const Cart = () => {
  return (
    <section style={{ display:'grid',gridTemplateColumns:'3fr 1fr'}}>
      <CartProducts/>

      <CartAmountDetails/>
    </section>
  );
};

export default Cart;
