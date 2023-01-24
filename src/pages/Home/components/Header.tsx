import React from 'react';
import { Button, Flex, Group, NativeSelect, Stack, Text, TextInput } from '@mantine/core';
import { IconSearch,IconStar } from '@tabler/icons';
import { Link } from 'react-router-dom';
import { useProductsState } from '../../../hooks/useProductsContext';
import { FilterActionType, FilterReducerActions } from '../../../types/FilterReducerActions';

const StarRatingCounter = ({filterDispatch,rating}: {filterDispatch:  React.Dispatch<FilterReducerActions>;rating: number}) => {
  return (
    <Stack align={'center'} spacing={1.5}>
      <Text fw={600} fz='sm' color={'#212529'}>---Filter By Rating---</Text>

      <Group align={'center'} py={8} px={'sm'} style={{border:'1px solid #ced4da',borderRadius:'2px'}}>
        {
          [...Array(5)].map((_,i) =>
            <IconStar
              key={i}
              style={{cursor:'pointer'}}
              size={15}
              color={
                i>=rating
                  ? 'black'
                  :'yellow'
              }
              fill={i>=rating
                ? 'white'
                :'yellow'}
              onClick={() => filterDispatch({
                type: FilterActionType.FilterByRating,
                payload: i+1
              })}
            />
          )
        }
      </Group>
    </Stack>
  );
};

const Header = () => {
  const {productsState,filterState,filterDispatch} = useProductsState();

  return (
    <Flex align={'center'} justify={'space-between'} px={5} py={10}>
      <Group align={'center'} position='center' spacing={5}>
        <NativeSelect
          label='---Filter By Category---'
          value={filterState.category}
          onChange={e => filterDispatch({
            type: FilterActionType.FilterByCategory,
            payload: e.target.value
          })}
          data={['all',...new Set(productsState.products.map(product => product.category))]}
        />

        <NativeSelect
          label='---Sort By Price---'
          value={filterState.sort
            ? 'Ascending'
            :'Descending'}
          data={['Ascending','Descending']}
          onChange={e => filterDispatch({
            type: FilterActionType.SortByPrice,
            payload: e.target.value
          })}
        />

        <StarRatingCounter rating={filterState.rating} filterDispatch={filterDispatch}/>

        <Button mt={'auto'} variant='subtle' onClick={() => filterDispatch({type: FilterActionType.ClearAllFilters})}>Reset</Button>
      </Group>

      <Group align={'center'} position='center' spacing={5}>
        <TextInput
          value={filterState.searchByQuery}
          label={'----------Filter By Query----------'}
          placeholder='Name of the Product...'
          onChange={e => filterDispatch({
            type: FilterActionType.FilterByQuery,
            payload: e.target.value
          })}
          type='text'
          icon={<IconSearch size={18}/>}/>

        <Button component={Link} to='/cart' mt={'auto'}>View Cart</Button>
      </Group>
    </Flex>
  );
};

export default Header;
