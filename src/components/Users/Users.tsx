import React, {useEffect, useState} from 'react';
import {IResponseUsers, IUser} from "../../models/user.model";
import {IPost, IResponsePosts} from "../../models/post.model";
import {getAllUsers, getAllPostsCurrentUser} from "../../services/api.service";
import User from "../User/User";
import './Users.css';
import Posts from "../Posts/Posts";

const Users = () => {

    const [users, setUsers] = useState<IUser[]>([]);
    const [posts, setPosts] = useState<IPost[]>([]);

    useEffect(() => {
        getAllUsers().then((data: IResponseUsers) => {
            setUsers([...data.users]);
        })
    }, [])

    const getPostsById = (id: number) => {
        getAllPostsCurrentUser(id).then((data: IResponsePosts) => setPosts([...data.posts]))
    }

    return (
        <div>
            <h2 className={'users-list_title'}>Список користувачів</h2>
            <hr/>
            <div className={'users-list'}>
                {
                    users.map(user => <User key={user.id} user={user} getPostsById={getPostsById}/>)
                }
            </div>
            <hr/>
            <Posts posts={posts}/>
        </div>
    );
};

export default Users;