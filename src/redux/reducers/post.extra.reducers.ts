import {createAsyncThunk} from "@reduxjs/toolkit";
import {AxiosError} from "axios";
import { postService } from "../../services/post.service";

const getPosts = createAsyncThunk(
    'userSlice/getPosts',
    async (_, thunkAPI) => {
        try {
            let posts = await postService.getAll();
            return thunkAPI.fulfillWithValue(posts);
        } catch (e) {
            let e1 = e as AxiosError;
            return thunkAPI.rejectWithValue(e1);
        }
    }
)

const getPost = createAsyncThunk(
    'userSlice/getPost',
    async (id: number, thunkAPI) => {
        try {
            let post = await postService.getById(id);
            return thunkAPI.fulfillWithValue(post);
        } catch (e) {
            let e1 = e as AxiosError;
            return thunkAPI.rejectWithValue(e1);
        }
    }
)

const getCommentsOfPost = createAsyncThunk(
    'userSlice/getCommentsOfPost',
    async (id: number, thunkAPI) => {
        try {
            let comments = await postService.commentsOfPost(id);
            return thunkAPI.fulfillWithValue(comments);
        } catch (e) {
            let e1 = e as AxiosError;
            return thunkAPI.rejectWithValue(e1);
        }
    }
)

export {
    getPosts,
    getPost,
    getCommentsOfPost
}