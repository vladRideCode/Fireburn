import { CHANGE_DEPOT, CHANGE_ROUTE, IS_LOADING } from './login.actions';

export const init = (state = {depot: '', route: '', is_loading: false}, action) => {
  switch (action.type) {
    case CHANGE_DEPOT:
    return {
      ...state,
      depot: action.depot
    }
    break;
    case CHANGE_ROUTE:
    return {
      ...state,
      route: action.route
    }
    case IS_LOADING:
    return {
      ...state,
      is_loading: true
    }
    default:
    return state;
  }

}
