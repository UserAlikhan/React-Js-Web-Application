import {createSlice} from "@reduxjs/toolkit";
import reducers from "../reducers";

const CharactersSlice = createSlice({
    name: "Characters",
    initialState: [],
    reducers: {
    addCharacter: (state, action) => {
        state.push(action.payload)
    }
}
})

export const {addCharacter} = CharactersSlice.actions

export default CharactersSlice.reducer