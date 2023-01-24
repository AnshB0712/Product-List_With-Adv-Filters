export enum FilterActionType {
    SortByPrice = 'SORT_BY_PRICE',
    FilterByCategory = 'FILER_BY_CATEGORY',
    FilterByRating = 'FILTER_BY_RATING',
    FilterByQuery = 'FILTER_BY_QUERY',
    ClearAllFilters = 'CLEAR_ALL_FILTERS'
}

export type SortByPrice = {
    type: FilterActionType.SortByPrice;
    payload: string ;
};
export type FilterByCategory = {
    type: FilterActionType.FilterByCategory;
    payload: string ;
};
export type FilterByRating = {
    type: FilterActionType.FilterByRating;
    payload: number;
};
export type FilterByQuery = {
    type: FilterActionType.FilterByQuery;
    payload: string;
};
export type ClearAllFilters = {
    type: FilterActionType.ClearAllFilters;
};

export type FilterReducerActions = SortByPrice | FilterByCategory | FilterByRating | FilterByQuery | ClearAllFilters;