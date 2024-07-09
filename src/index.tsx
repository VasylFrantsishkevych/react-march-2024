import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layouts/mainLayout";
import { CommentsPage, PostsPage, UsersPage } from "./pages";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

let router = createBrowserRouter([
    { path: "/", element: <MainLayout/>, children: [
        {index: true, element: <UsersPage/>},
        {path: 'users', element: <UsersPage/>},
        {path: 'posts', element: <PostsPage/>},
        {path: 'comments', element: <CommentsPage/>},
    ] }
]);
root.render(<RouterProvider router={router}/>);
