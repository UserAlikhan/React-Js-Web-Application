import {createStore} from "redux";

let initialState = {
    title: "Title",
    count: 0
}

const store = createStore((state = initialState, action)=>{
    switch (action.type){
        case 'SET_TITLE': {
            let count = ++state.count
            let title = 'Title' + count
            return {...state, title, count}
        }
        default: return state
    }
});

export const setTitle = () => ({type: 'SET_TITLE'})
window.store = store

export default store
