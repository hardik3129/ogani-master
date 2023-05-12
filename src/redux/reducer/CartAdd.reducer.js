import { ADD_CART, CART_QUANTITY_DECREMENT, CART_QUANTITY_INCREMENT, DELETE_CART, SET_CART_TOTAL } from "../constant"

const initialstate = {
    cart : [],
    cartTotal : 0
}

const CartAddreducer = (state = initialstate, action) => {

    if (action.type === ADD_CART) {
        return { ...state, cart : [...state.cart, {...action.payload, quantity : 1}] }
    }
    if (action.type === DELETE_CART) {
        const filter = state.cart.filter((i) => i !== action.payload)
        return { ...state, cart : filter}
    }
    if (action.type === CART_QUANTITY_INCREMENT) {
        const quantityAdd = state.cart.filter((i) => i.id === action.payload.id && i.uid === action.payload.uid ? i.quantity += 1 : i.quantity)
        return { ...state, cart : quantityAdd }
    }
    if (action.type === CART_QUANTITY_DECREMENT) {
        const quantityRemove = state.cart.filter((i) => i.id === action.payload.id && i.uid === action.payload.uid ? i.quantity -= 1 : i.quantity)
        return { ...state, cart : quantityRemove }
    }
    if (action.type === SET_CART_TOTAL) {
        return { ...state, cartTotal : action.payload}
    }
    
  return state
}

export default CartAddreducer
