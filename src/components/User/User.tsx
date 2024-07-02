import React, {FC} from 'react';
import {IUser} from "../../models/user.model";
import './User.css';

interface IProps {
    user: IUser,
    getPostsById: (id: number) => void
}

const User: FC<IProps> = ({user, getPostsById}) => {

    return (
        <div className={'user-card'}>
            <h2>{user.firstName} {user.lastName}</h2>
            <p><span>ID:</span>{user.id}</p>
            <p><span>Вік:</span>{user.age}</p>
            <p><span>Стать:</span>{user.gender}</p>
            <p><span>Email:</span>{user.email}</p>
            <p><span>Телефон:</span>{user.phone}</p>
            <button onClick={() => getPostsById(user.id)}>Posts</button>
        </div>
    );
};

export default User;