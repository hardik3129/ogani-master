import { ADD_CART, CART_QUANTITY_DECREMENT, CART_QUANTITY_INCREMENT, DELETE_CART } from "../constant"

export const CartAddaction = (data) => {
  return {
    type : ADD_CART,
    payload : data
  }
}

export const CartDeleteaction = (id) => {
    return {
      type : DELETE_CART,
      payload : id
    }
  }

export const CartIncrement = (id) => {
    return {
      type : CART_QUANTITY_INCREMENT,
      payload : id
    }
  }

export const CartDecrement = (id) => {
    return {
      type : CART_QUANTITY_DECREMENT,
      payload : id
    }
  }
  