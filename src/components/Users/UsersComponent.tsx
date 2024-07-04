import React, {Component} from 'react';

import {IResponseUsers, IUser} from "../../models";
import {UserService} from "../../services";
import UserComponent from "../User/UserComponent";

import './UsersComponent.css';
import {IPost, IResponsePosts} from "../../models/post.model";
import PostsComponent from "../Posts/PostsComponent";

type State = {
    users: IUser[],
    postsForUserById: IPost[],
}

class UsersComponent extends Component<{}, State> {
    state: State = {
        users: [],
        postsForUserById: [],
    };
    userService = new UserService();

    constructor(props) {
        super(props);
        this.getPostsCurrentUser = this.getPostsCurrentUser.bind(this);
    }

    getPostsCurrentUser(id: number) {
        this.userService.getAllPostsCurrentUser(id).then((data: IResponsePosts) => this.setState({
            ...this.state, postsForUserById: data.posts
        }))
    }
    componentDidMount() {
        this.userService.getAllUsers().then((data: IResponseUsers) => this.setState({
            ...this.state, users: data.users
        }))
    }

    render() {
        console.log(this.state.postsForUserById)
        return (
            <div>
                <h2 className={'users-list_title'}>Список користувачів</h2>
                <hr/>
                <div className={'users-list'}>
                    {
                        this.state.users.map(user => <UserComponent
                            key={user.id}
                            user={user}
                            getPostsCurrentUser={this.getPostsCurrentUser}
                        />)
                    }
                </div>
                <hr/>
                <PostsComponent posts={this.state.postsForUserById}/>
            </div>
        );
    }
}

export default UsersComponent;