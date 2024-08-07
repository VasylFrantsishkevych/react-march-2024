import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/main.layout";
import { UsersPage } from "../pages/UsersPage/Users.page";
import { PostsPage } from "../pages/PostsPage/Posts.page";
import { UserPage } from "../pages/UserPage/User.page";
import { PostsOfUserPage } from "../pages/PostsOfUserPage/PostOfUser.page";
import { CommentsOfPostPage } from "../pages/CommentsOfPostPage/CommentsOfPost.page";

export const routers = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <h1>error</h1>,
    children: [
      { index: true, element: <UsersPage /> },
      { path: "users", element: <UsersPage /> },
      {
        path: "users/:id",
        element: <UserPage />,
        children: [{ path: "posts", element: <PostsOfUserPage /> }],
      },
      { path: "posts", element: <PostsPage /> },
      { path: "posts/:id/comments", element: <CommentsOfPostPage /> },
    ],
  },
]);
