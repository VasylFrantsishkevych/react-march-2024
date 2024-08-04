import {createSlice, isFulfilled} from "@reduxjs/toolkit";
import { IPost } from "../../models";
import { loadPosts } from "../reducers/post.extra.reducers";


type PostSliceType = {
    posts: IPost[],
    isLoaded: boolean
}

const postInitState: PostSliceType = {
    posts: [],
    isLoaded: false
}

export const postsSlice = createSlice({
    name: "postsSlice",
    initialState: postInitState,
    reducers: {
        isLoading: (state) => {
            state.isLoaded = true
        }
    },
    extraReducers: (builder) =>
        builder
            .addCase(loadPosts.fulfilled, (state, action) => {
                state.posts = action.payload;
                state.isLoaded = true;
            })
});

export const postActions = {
    ...postsSlice.actions,
    loadPosts
}