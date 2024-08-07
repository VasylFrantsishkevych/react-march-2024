import {createSlice, isRejected} from "@reduxjs/toolkit";
import { IComment, IPost } from "../../models";
import { getCommentsOfPost, getPost, getPosts } from "../reducers";


type PostSliceType = {
    posts: IPost[],
    isLoaded: boolean,
    error: string,
    post: IPost | null,
    commentsOfPost: IComment[],
}

const postInitState: PostSliceType = {
    posts: [],
    isLoaded: false,
    error: '',
    post: null,
    commentsOfPost: [],
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
            .addCase(getPosts.fulfilled, (state, action) => {
                state.posts = action.payload;
                state.isLoaded = true;
            })
            .addCase(getPost.fulfilled, (state, action) => {
                state.post = action.payload;
                state.isLoaded = true;
            })
            .addCase(getCommentsOfPost.fulfilled, (state, action) => {
                state.commentsOfPost = action.payload;
                state.isLoaded = true;
            })
            .addMatcher(isRejected(getPosts, getPost, getCommentsOfPost), (state, action) => {
                state.error = action.payload as string;
            })
});

export const postActions = {
    ...postsSlice.actions,
    getPosts,
    getPost,
    getCommentsOfPost,
}