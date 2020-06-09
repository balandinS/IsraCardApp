import {FETCH_MOVEIS} from '../actions/types'

export default (state =[], { type, payload }) => {
    switch (type) {

    case FETCH_MOVEIS:
        return [...payload]

    default:
        return state
    }
}
