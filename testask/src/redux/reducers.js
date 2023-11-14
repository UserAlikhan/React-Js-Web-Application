import {combineReducers} from "redux";
import {FETCH_CHARACTERS_REQUEST, FETCH_CHARACTERS_FAILURE, FETCH_CHARACTERS_SUCCESS} from "./actions";

const characters = (state = { data: [], loading: false, error: null}, action) => {
    switch (action.type){
        case 'FETCH_CHARACTERS_REQUEST':
            return {...state, loading: true, error: null}
        case  'FETCH_CHARACTERS_SUCCESS':
            return {...state, data: action.payload, loading: false, error: null}
        case 'FETCH_CHARACTERS_FAILURE':
            return {...state, loading: false, error: action.error}
        default: return state
    }
}

const rootReducer = combineReducers({characters})
export default rootReducer