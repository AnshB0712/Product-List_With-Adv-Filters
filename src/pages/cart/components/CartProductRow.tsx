import React from 'react';
import { ActionIcon, AspectRatio, Image, Stack, Text } from '@mantine/core';
import { IconMinus, IconPlus, IconX } from '@tabler/icons';
import { useProductsState } from '../../../hooks/useProductsContext';
import { Product } from '../../../types/Product';
import { ActionType, ReducerActions } from '../../../types/ProductReducerActions';

const QtyCounter = ({product,productsDispatch}: {product: Product;productsDispatch: React.Dispatch<ReducerActions>}) => {

  const handleClick = (additive: number) => {

    if(product.qty && product.qty+additive<1){
      productsDispatch({
        type: ActionType.RemoveItemToCart,
        payload: product.id
      });
      return;
    }

    productsDispatch({
      type: ActionType.ManipulateItemQty,
      payload: {
        additive: product.qty
          ? product.qty + additive
          :additive,
        id: product.id
      }
    });
  };

  return (
    <Stack py={10} align="center" justify="space-around" spacing={9} style={{border:'1px solid #dbdbd8',borderRadius:'8px'}}>
      <ActionIcon variant='outline' size={'sm'} onClick={() => handleClick(1)}>
        <IconPlus/>
      </ActionIcon>

      <Text>{product.qty}</Text>

      <ActionIcon variant='outline' size={'sm'} onClick={() => handleClick(-1)}>
        <IconMinus/>
      </ActionIcon>
    </Stack>
  );
};

const CartProductRow = ({product}: {product: Product}) => {
  const { productsDispatch } = useProductsState();
  return (
    <tr style={{outline:'1px solid #dbdbdd8'}}>
      <td>
        <ActionIcon size={'sm'} onClick={() => productsDispatch({
          type: ActionType.RemoveItemToCart,
          payload: product.id
        })}>
          <IconX size={18}/>
        </ActionIcon>
      </td>

      <td>
        <AspectRatio ratio={1}>
          <Image src={product.thumbnail}/>
        </AspectRatio>
      </td>

      <td style={{width:'120px'}}>
        <Text>{product.title}</Text>
      </td>

      <td style={{width:'120px'}}>
        <Text transform='capitalize' fs={'italic'} color='dimmed' fw={500}>{product.category}</Text>
      </td>

      <td width={70}>
        <QtyCounter product={product} productsDispatch={productsDispatch}/>
      </td>

      <td>
        <Text fw={600} color='green'>{`$${product.price}`}</Text>
      </td>

      <td>
        <Text fw={600} color='green'>{`$${product.qty && product.price*product.qty}`}</Text>
      </td>

    </tr>
  );};

export default CartProductRow;
