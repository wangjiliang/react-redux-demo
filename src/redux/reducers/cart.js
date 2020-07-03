
import actionTypes from '../actions/actionTypes'

const defaultState = [
  {
    id:1,
    title: 'Apple',
    price: 88.5,
    amount: 10
  },
  {
    id:2,
    title: 'Orange',
    price: 16.5,
    amount: 10
  },
]

export default (state=defaultState, action) => {
  switch (action.type) {
    case actionTypes.CART_ITEM_INCREMENT:
      return state.map((item) => {
        if(item.id === action.data.id) {
          item.amount ++
        }
        return item
      })
      case actionTypes.CART_ITEM_DECREMENT:
        return state.map((item) => {
          if(item.id === action.data.id) {
            item.amount --
          }
          return item
      })
    default:
      return state
  }
}