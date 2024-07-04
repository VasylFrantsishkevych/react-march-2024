import React, {Component} from 'react';

import {IPost} from "../../models/post.model";

import './PostComponent.css';

type Props = {
    post: IPost;
}

class PostComponent extends Component<Props> {
    post = this.props.post;
    render() {
        return (
            <div className={'post-card'}>
                <div className={'tags'}>
                    {
                        this.post.tags.map((tag, i) => <p key={i}><span>#</span>{tag}</p>)
                    }
                </div>
                <div>
                    <h2>{this.post.title}</h2>
                    <p><span>UserID:</span>{this.post.userId}</p>
                    <p>{this.post.body}</p>
                </div>
                <div className={'reactions'}>
                    <p><span>Like: </span>{this.post.reactions.likes}</p>
                    <p><span>Dislikes:</span>{this.post.reactions.dislikes}</p>
                </div>
            </div>
        );
    }
}

export default PostComponent;