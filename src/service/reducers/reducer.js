import { ADD_TO_CART, REMOVE_FROM_CART } from '../constants'

const initialState = {
    cartData: []
}
export default function cardItems(state = [], action) {
    switch (action.type) {
        case ADD_TO_CART:
            // console.warn("reducer",action)
            return [
                ...state,
                {cartData: action.data}
            ]


            case REMOVE_FROM_CART:
            // console.warn("reducer",action)
            state.pop()
            return [
                ...state,
            ]
        
            

        default:
            return state
    }


}
