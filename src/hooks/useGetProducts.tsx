import useSWR from 'swr';
import { useProductsState } from './useProductsContext';
import customAxios from '../api/axios';
import { ActionType } from '../types/ProductReducerActions';

const fetcher = (args: [string,{ params: {limit: string}}]) => customAxios.get(...args).then(({data}) => data);

const useGetProducts = () => {
  const {productsDispatch} = useProductsState();
  const {isLoading,error} = useSWR(['/',{params:{limit: '100'}}],fetcher,{
    refreshInterval: 300000,
    dedupingInterval: 300000,
    onSuccess: (data) => {
      productsDispatch({
        type: ActionType.InitiateData,
        payload: data.products
      });
    }
  });
  return ({isLoading,error});
};

export default useGetProducts;
