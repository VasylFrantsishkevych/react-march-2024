import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/main.layout";
import { UsersPage } from "../pages/UserPage/Users.page";
import { PostsPage } from "../pages/PostsPage/Posts.page";

export const routers = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <UsersPage /> },
      { path: "users", element: <UsersPage /> },
         {path: 'posts', element: <PostsPage/>}
    ],
  },
]);
