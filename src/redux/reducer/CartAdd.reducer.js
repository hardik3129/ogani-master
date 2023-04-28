import { ADD_CART, CART_QUANTITY_DECREMENT, CART_QUANTITY_INCREMENT, DELETE_CART } from "../constant"

const initialstate = {
    cart : []
}

const CartAddreducer = (state = initialstate, action) => {

    if (action.type === ADD_CART) {
        return { ...state, cart : [...state.cart, {...action.payload, quantity : 1}] }
    }
    if (action.type === DELETE_CART) {
        return { ...state, cart : state.cart.filter((i) => i.id !== action.payload) }
    }
    if (action.type === CART_QUANTITY_INCREMENT) {
        const quantityAdd = state.cart.filter((i) => i.id === action.payload ? i.quantity += 1 : i.quantity)
        return { ...state, cart : quantityAdd }
    }
    if (action.type === CART_QUANTITY_DECREMENT) {
        const quantityRemove = state.cart.filter((i) => i.id === action.payload ? i.quantity -= 1 : i.quantity)
        return { ...state, cart : quantityRemove }
    }
    
  return state
}

export default CartAddreducer
