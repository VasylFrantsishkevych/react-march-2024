import {createSlice, isRejected} from "@reduxjs/toolkit";
import { IPost, IUser } from "../../models";
import { getPostsOfUser, getUser, getUsers } from "../reducers";


type UserSliceType = {
    users: IUser[],
    isLoaded: boolean,
    error: string,
    user: IUser | null,
    postsOfUser: IPost[],
}

const userInitState: UserSliceType = {
    users: [],
    isLoaded: false,
    error: '',
    user: null,
    postsOfUser: [],
}

export const userSlice = createSlice({
    name: "usersSlice",
    initialState: userInitState,
    reducers: {
    },
    extraReducers: (builder) =>
        builder
            .addCase(getUsers.fulfilled, (state, action) => {
                state.users = action.payload;
                state.isLoaded = true;
            })
            .addCase(getUser.fulfilled, (state, action) => {
                state.user = action.payload;
                state.isLoaded = true;
            })
            .addCase(getPostsOfUser.fulfilled, (state, action) => {
                state.postsOfUser = action.payload;
                state.isLoaded = true;
            })
            .addMatcher(isRejected(getUsers, getUser, getPostsOfUser), (state, action) => {
                state.error = action.payload as string;
                state.isLoaded = true;
            })
});

export const userActions = {
    ...userSlice.actions,
    getUsers,
    getUser,
    getPostsOfUser
}