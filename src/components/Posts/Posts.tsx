import React, { useEffect, useState } from "react";

import { IPost } from "../../models/post.model";
import "./Posts.css";
import { postService } from "../../services";
import Post from "../Post/Post";
import Form from "../Form/Form";

const Posts = () => {
  const [posts, setPosts] = useState<IPost[]>([]);

  useEffect(() => {
    postService.getAll().then((posts) => setPosts([...posts]));
  }, []);

  const createPost = (newPost: IPost) => {
    setPosts([...posts, newPost]);
  };
console.log(posts.reverse)
  return (
    <div className={"posts-list"}>
      <div className={'form'}>
      <Form createPost={createPost}/> 
      </div> 
      {posts.map((post) => (
        <Post key={post.id} post={post}/>
      ))}
    </div>
  );
};

export default Posts;
