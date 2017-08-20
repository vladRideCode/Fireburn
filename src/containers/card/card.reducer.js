import { ADD_CARD } from './card.actions';

const intialCards = [
  {title:'Robo X'},
  {title: 'Robo D'}
];

export const cards = (state = intialCards, action) => {
  switch (action.type) {
    case ADD_CARD:
      return [
        ...state,
        {
          title: action.title
        }
      ]
      break;
    default:
      return state;
  }
}
