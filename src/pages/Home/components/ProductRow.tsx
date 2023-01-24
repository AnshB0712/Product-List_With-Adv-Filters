import React,{useState} from 'react';
import { ActionIcon, AspectRatio, Checkbox, Image, Text, TextInput } from '@mantine/core';
import { IconShoppingCart } from '@tabler/icons';
import { useProductsState } from '../../../hooks/useProductsContext';
import { Product } from '../../../types/Product';
import { ActionType } from '../../../types/ProductReducerActions';

const ProductRow = ({product}: {product: Product}) => {
  const { productsState,productsDispatch } = useProductsState();
  const isItemAlreadyInCart = productsState.cart.find(pro => pro.id === product.id);
  const [additive,setAdditive] = useState(1);

  const handleCheck = (value: boolean) => {
    if(!value){
      productsDispatch({
        type: ActionType.RemoveItemToCart,
        payload: product.id
      });
      setAdditive(1);
      return;
    }

    productsDispatch({
      type: ActionType.AddItemToCart,
      payload: product
    });
  };

  const handleClick = () => {

    if(additive < 0) return;

    if(!additive){
      productsDispatch({
        type: ActionType.RemoveItemToCart,
        payload: product.id
      });
      setAdditive(1);
      return;
    }

    productsDispatch({
      type: ActionType.ManipulateItemQty,
      payload: {
        id: product.id,
        additive
      }
    });
  };

  return (
    <tr style={{overflow:'hidden'}}>
      <td>
        <AspectRatio ratio={1}>
          <Image src={product.thumbnail}/>
        </AspectRatio>
      </td>

      <td>
        <Text>{product.title}</Text>
      </td>

      <td>
        <Text transform='capitalize' fs={'italic'} color='dimmed' fw={500}>{product.category}</Text>
      </td>

      <td>
        <Text fw={500}>{product.stock}</Text>
      </td>

      <td>
        <Text fw={500}>{product.rating}</Text>
      </td>

      <td>
        <Text fw={600} color='green'>{`$${product.price}`}</Text>
      </td>

      <td style={{display:'flex',alignItems:'center',gap:10}}>
        <TextInput
          disabled={!isItemAlreadyInCart}
          error={additive > product.stock}
          value={additive} onChange={e => setAdditive(Number(e.target.value))}
          style={{width:'65px',display: 'inline-block'}} type={'number'} rightSection={
            <ActionIcon onClick={handleClick} disabled={!isItemAlreadyInCart} variant='filled'>
              <IconShoppingCart size={15}/>
            </ActionIcon>
          }/>

        <Checkbox disabled={additive > product.stock} checked={Boolean(isItemAlreadyInCart)} onChange={(e) => handleCheck(e.target.checked)}/>
      </td>
    </tr>
  );
};

export default ProductRow;
