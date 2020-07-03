
import actionTypes from './actionTypes'

export const increment = (id) => {
  return {
    type : actionTypes.CART_ITEM_INCREMENT,
    data : {
      id
    }
  }
}

export const decrement = (id) => {
  return {
    type : actionTypes.CART_ITEM_DECREMENT,
    data : {
      id
    }

  }
}
