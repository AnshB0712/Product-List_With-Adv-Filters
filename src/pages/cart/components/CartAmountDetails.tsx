import React from 'react';
import { Button, Group, Stack, Text, Title } from '@mantine/core';
import { Link } from 'react-router-dom';
import { useProductsState } from '../../../hooks/useProductsContext';

const CartAmountDetails = () => {
  const {productsState} = useProductsState();
  const totalAmount = productsState.cart.reduce((acc,cur) => (acc+(cur.qty
    ? cur.qty*cur.price
    : 1)),0);
  return (
    <>
      <Stack p={'xl'} spacing={5}>
        <Title order={3} fw={400}>Cart Total</Title>

        <Group py={5} align={'center'} position={'apart'} style={{borderBottom:'1px solid #dbdbd8'}}>
          <Text fz={'sm'} fw={500} color='dimmed'>Subtotal: </Text>

          <Text fz={'sm'} fw={500} color='dimmed'>{`$${totalAmount}.00`}</Text>
        </Group>

        <Group align={'center'} position={'apart'}>
          <Text fz={'md'} fw={400}>Total: </Text>

          <Text fz={'md'} fw={400}>{`$${totalAmount}.00`}</Text>
        </Group>

        <Button disabled={!productsState.cart.length} component={Link} to='/checkout' mt={10} size='md' radius={100}>Checkout</Button>
      </Stack>
    </>
  );
};

export default CartAmountDetails;
