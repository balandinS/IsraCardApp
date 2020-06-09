import {USER_SIGNINED, USER_SIGNINOUTED} from '../actions/types'
const initialState = {
    image: '../../assests/images/user.png',
    userName: 'Stranger'
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case USER_SIGNINED:
        console.log(payload)
        return { ...state, ...payload }
    case USER_SIGNINOUTED: 
      return{...state, ...initialState}
    default: 
        return state
    }
}
