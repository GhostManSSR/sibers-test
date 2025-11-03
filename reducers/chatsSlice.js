import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    chats: [{
        nameChats: "",
        lastMessage: "",
        listMassage: []
    }],
}

const chatsSlice = createSlice({
    name: "chats",
    initialState,
    reducers: {
        addChats(state, action) {
            state.chats.push(action.payload);
        },
    },
});

export const { addChats } = chatsSlice.actions;

export default chatsSlice.reducer;