import {createAsyncThunk} from "@reduxjs/toolkit";
import {AxiosError} from "axios";
import { userService } from "../../services/user.service";

const getUsers = createAsyncThunk(
    'userSlice/getUsers',
    async (_, thunkAPI) => {
        try {
            let users = await userService.getAll();
            return thunkAPI.fulfillWithValue(users);
        } catch (e) {
            let error = e as AxiosError;
            return thunkAPI.rejectWithValue(error?.response?.data);
        }
    }
)

const getUser = createAsyncThunk(
    'userSlice/getUser',
    async (id: number, thunkAPI) => {
        try {
            let user = await userService.getById(id);
            return thunkAPI.fulfillWithValue(user);
        } catch (e) {
            let error = e as AxiosError;
            return thunkAPI.rejectWithValue(error?.response?.data);
        }
    }
);

const getPostsOfUser = createAsyncThunk(
    'userSlice/getPostsOfUser',
    async (id: number, thunkAPI) => {
        try {
            let posts = await userService.postsOfUser(id);
            return thunkAPI.fulfillWithValue(posts);
        } catch (e) {
            let error = e as AxiosError;
            return thunkAPI.rejectWithValue(error?.response?.data);
        }
    });

    export {
        getUsers,
        getUser,
        getPostsOfUser
    }