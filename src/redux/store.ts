import {configureStore} from "@reduxjs/toolkit";
import {useDispatch, useSelector} from "react-redux";
import { userSlice } from "./slices/user.slice";
import { postsSlice } from "./slices/post.slice";


export const store = configureStore({
    reducer: {
        userSlice: userSlice.reducer,
        postSlice:postsSlice.reducer
    }
});

export const useAppSelector = useSelector.withTypes<ReturnType<typeof store.getState>>();
export const useAppDispatch = useDispatch.withTypes<typeof store.dispatch>();