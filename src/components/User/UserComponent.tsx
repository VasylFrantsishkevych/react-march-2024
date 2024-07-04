import React, {Component} from 'react';

import {IUser} from "../../models";

import './UserComponent.css';

type IProps = {
    user: IUser,
    getPostsCurrentUser: (id: number) => void;
}

class UserComponent extends Component<IProps> {
    user = this.props.user
    render() {
        return (
            <div className={'user-card'}>
                <h2>{this.user.firstName} {this.user.lastName}</h2>
                <p><span>ID:</span>{this.user.id}</p>
                <p><span>Вік:</span>{this.user.age}</p>
                <p><span>Стать:</span>{this.user.gender}</p>
                <p><span>Email:</span>{this.user.email}</p>
                <p><span>Телефон:</span>{this.user.phone}</p>
                <button onClick={() => {
                    this.props.getPostsCurrentUser(this.user.id); console.log(this.user.id)
                }}>Posts</button>
            </div>
        );
    }
}

export default UserComponent;