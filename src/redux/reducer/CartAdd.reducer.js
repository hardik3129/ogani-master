import { ADD_CART, CART_QUANTITY_DECREMENT, CART_QUANTITY_INCREMENT, DELETE_CART, SET_CART_TOTAL } from "../constant"

const initialstate = {
    cart: [],
    cartTotal: 0
}

const CartAddreducer = (state = initialstate, action) => {

    switch (action.type) {
        case ADD_CART:
            return { ...state, cart: [...state.cart, { ...action.payload, quantity: 1 }] }

        case DELETE_CART:
            const filter = state.cart.filter((i) => i !== action.payload)
            return { ...state, cart: filter }

        case CART_QUANTITY_INCREMENT:
            const quantityAdd = state.cart.filter((i) => i.id === action.payload.id && i.uid === action.payload.uid ? i.quantity += 1 : i.qƒƒuantity)
            return { ...state, cart: quantityAdd }

        case CART_QUANTITY_DECREMENT:
            const quantityRemove = state.cart.filter((i) => i.id === action.payload.id && i.uid === action.payload.uid ? i.quantity -= 1 : i.quantity)
            return { ...state, cart: quantityRemove }

        case SET_CART_TOTAL:
            return { ...state, cartTotal: action.payload }

        default:
            return state
    }
}

export default CartAddreducer
