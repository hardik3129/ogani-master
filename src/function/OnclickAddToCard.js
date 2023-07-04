import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import FruitData from '../fruits.json'
import { CartAddaction } from '../redux/action/CartAdd.action'

const OnclickAddToCard = (Cart, getCartData, getAccessToken, dispatch) => {

    if (getCartData.find((i) => i.id == Cart.id && i.uid == getAccessToken)) {
        toast.info(`Allready ${Cart.name} Add To Cart`)
    } else {
        const filter = FruitData.find((i) => i.id === Cart.id)
        toast.success(`Successfully ${Cart.name} Add to Cart`)
        dispatch(CartAddaction({...filter, uid : getAccessToken}))
    }
}

export default OnclickAddToCard
