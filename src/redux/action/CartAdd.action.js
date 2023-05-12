import { ADD_CART, CART_QUANTITY_DECREMENT, CART_QUANTITY_INCREMENT, DELETE_CART, SET_CART_TOTAL } from "../constant"

// =============== Cart Add ===============
export const CartAddaction = (data) => {
  return {
    type : ADD_CART,
    payload : data
  }
}

// =============== Cart Delete ===============
export const CartDeleteaction = (data) => {
    return {
      type : DELETE_CART,
      payload : data
    }
  }

// =============== Cart Increment ===============
export const CartIncrement = (id,uid) => {
    return {
      type : CART_QUANTITY_INCREMENT,
      payload : {id,uid}
    }
  }

// =============== Cart Decrement ===============
export const CartDecrement = (id,uid) => {
    return {
      type : CART_QUANTITY_DECREMENT,
      payload : {id,uid}
    }
  }

// =============== Cart Total Price ===============  
export const SetCartTotal = (Total) => {
  return {
    type : SET_CART_TOTAL,
    payload : Total
  }
} 