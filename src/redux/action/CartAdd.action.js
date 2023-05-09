import { ADD_CART, CART_QUANTITY_DECREMENT, CART_QUANTITY_INCREMENT, DELETE_CART, SET_CART_TOTAL } from "../constant"

// =============== Cart Add ===============
export const CartAddaction = (data) => {
  return {
    type : ADD_CART,
    payload : data
  }
}

// =============== Cart Delete ===============
export const CartDeleteaction = (id) => {
    return {
      type : DELETE_CART,
      payload : id
    }
  }

// =============== Cart Increment ===============
export const CartIncrement = (id) => {
    return {
      type : CART_QUANTITY_INCREMENT,
      payload : id
    }
  }

// =============== Cart Decrement ===============
export const CartDecrement = (id) => {
    return {
      type : CART_QUANTITY_DECREMENT,
      payload : id
    }
  }

// =============== Cart Total Price ===============  
export const SetCartTotal = (Total) => {
  return {
    type : SET_CART_TOTAL,
    payload : Total
  }
} 