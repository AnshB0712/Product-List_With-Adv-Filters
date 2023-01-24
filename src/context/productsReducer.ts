import { FilterActionType } from './../types/FilterReducerActions';
import { Filter } from '../types/Filter';
import { FilterReducerActions } from '../types/FilterReducerActions';
import { Product } from '../types/Product';
import { ActionType, ReducerActions } from '../types/ProductReducerActions';

export const productsReducer = (state: {products: Product[];cart: Product[]}, action: ReducerActions) => {

  console.log(action.type);

  if (action.type === ActionType.InitiateData) {
    return ({
      products: [...action.payload.map(product =>({...product,rating: Math.ceil(Math.random()*5)}))],
      cart: [...state.cart]
    });
  }

  if(action.type === ActionType.AddItemToCart){
    return ({
      products: [...state.products],
      cart: [...state.cart,{qty:1,...action.payload}]
    });
  }

  if(action.type === ActionType.RemoveItemToCart){
    return ({
      products: [...state.products],
      cart: state.cart.filter(product => product.id !== action.payload)
    });
  }

  if(action.type === ActionType.ManipulateItemQty){
    return ({
      products: [...state.products],
      cart: state.cart.map(product => product.id===action.payload.id
        ? ({...product,qty: (action.payload.additive)})
        : product
      )
    });
  }
  return state;
};

export const filterReducer = (state: Filter,action: FilterReducerActions) => {

  console.log(action.type);

  if(action.type === FilterActionType.FilterByCategory){
    return {...state,category: action.payload !== 'all'
      ? action.payload
      : ''};
  }

  if(action.type === FilterActionType.SortByPrice){
    return {...state,sort: action.payload === 'Ascending'};
  }

  if(action.type === FilterActionType.FilterByQuery){
    return {...state,searchByQuery: action.payload};
  }

  if(action.type === FilterActionType.FilterByRating){
    return {...state,rating: action.payload};
  }

  if(action.type === FilterActionType.ClearAllFilters){
    return {
      category: '',
      sort: true,
      rating: 0,
      searchByQuery: ''
    };
  }

  return state;

};