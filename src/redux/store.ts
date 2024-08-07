import {configureStore} from "@reduxjs/toolkit";
import {useDispatch, useSelector} from "react-redux";
import { postsSlice, userSlice } from "./slices";


export const store = configureStore({
    reducer: {
        userSlice: userSlice.reducer,
        postSlice:postsSlice.reducer
    }
});

export const useAppSelector = useSelector.withTypes<ReturnType<typeof store.getState>>();
export const useAppDispatch = useDispatch.withTypes<typeof store.dispatch>();