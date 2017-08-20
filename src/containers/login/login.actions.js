export const CHANGE_DEPOT = 'CHANGE_DEPOT';
export const CHANGE_ROUTE = 'CHANGE_ROUTE';
export const IS_LOADING = 'IS_LOADING';

export const changeDepot = (depot) => ({
  type: CHANGE_DEPOT,
  depot
});

export const changeRoute = (route) => ({
  type: CHANGE_ROUTE,
  route
});

export const isLoading = () => ({
  type: IS_LOADING
});
