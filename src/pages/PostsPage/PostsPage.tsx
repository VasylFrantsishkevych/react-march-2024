import { useEffect, useState } from "react";
import { IPost } from "../../models";
import { postService } from "../../services";
import { Post } from "../../components";

const PostsPage = () => {
   const [posts, setPosts] = useState<IPost[]>([]);

   useEffect(() => {
      postService.getAll().then(posts => setPosts([...posts]));
   }, [])

   return (
      <div>
         {
            posts.map(post => <Post key={post.id} post={post}/>)
         }
      </div>
   )
};

export {PostsPage};