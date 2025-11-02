// userSlice.js
import { createSlice } from "@reduxjs/toolkit";
import usersFromJson from "@/data/users.json";

const initialState = {
    currentUserName: null,
    currentUser: null,
    listNameUsers: usersFromJson, // хранит полный список пользователей
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setSearchTerm(state, action) {
            state.searchTerm = action.payload;
        },
        updateUser(state, action) {
            if (!state.currentUser) {
                state.currentUser = {};
            }
            Object.assign(state.currentUser, action.payload);
        },
        setListNameUsers(state, action) {
            state.listNameUsers = action.payload;
        },
        setCurrentUserName(state, action) {
            state.currentUserName = action.payload;
            state.currentUser =
                state.listNameUsers.find(user => user.username === action.payload) || null;
        },
    },
});

export const { setListNameUsers, setCurrentUserName, updateUser, setSearchTerm } = userSlice.actions;

export default userSlice.reducer;
