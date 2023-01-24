import { Product } from './Product';

export enum ActionType {
    InitiateData = 'INITIATE_DATA',
    AddItemToCart = 'ADD_ITEM',
    ManipulateItemQty = 'MANIPULATE_ITEM_QTY',
    RemoveItemToCart = 'REMOVE_ITEM'
}
export type InitiateData = {
    type: ActionType.InitiateData;
    payload: Product[];
};
export type AddItemToCart = {
    type: ActionType.AddItemToCart;
    payload: Product;
};
export type RemoveItemToCart = {
    type: ActionType.RemoveItemToCart;
    payload: number;
};
export type ManipulateItemQty = {
    type: ActionType.ManipulateItemQty;
    payload: {additive: number;id: number};
};
export type ReducerActions = InitiateData | AddItemToCart | ManipulateItemQty | RemoveItemToCart;