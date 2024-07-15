import { useForm } from "react-hook-form";
import { ICreatePost, IPost } from "../../models";
import { postService } from "../../services";
import { FC } from "react";
import { postFormValidator } from "../../validators/postForn.validator";
import { joiResolver } from '@hookform/resolvers/joi';

interface IProps {
   createPost: (newPost: IPost) => void;
}

const Form: FC<IProps> = ({createPost}) => {
  let { register, reset, handleSubmit, formState: {errors, isValid} } = 
   useForm<ICreatePost>({mode: 'all', resolver: joiResolver(postFormValidator)});

  const formHandler = (data: ICreatePost) => {
      postService.createPost(data).then(newPost => createPost(newPost))
      reset();
  }
  
  return (
    <div>
      <h1>Create Post</h1>
      {errors.title && <div>username errors: {errors.title?.message}</div>}
      {errors.body && <div>password errors: {errors.body?.message}</div>}
      {errors.userId && <div>age errors: {errors.userId?.message}</div>}
      <form onSubmit={handleSubmit(formHandler)}>
        <input type="text" placeholder={"title"} {...register("title")} />
        <input type="text" placeholder={"body"} {...register("body")} />
        <input type="number" placeholder={"userId"} {...register("userId")} />
        <button disabled={!isValid}>Send</button>
      </form>
    </div>
  );
};

export default Form;
