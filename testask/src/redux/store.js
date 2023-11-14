import {configureStore} from "@reduxjs/toolkit";
import CharacterReducer from "./Characters/CharactersSlice"

const store = configureStore({
    reducer: {
        "Characters": CharacterReducer
    }
})

export default store