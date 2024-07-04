export interface IResponsePosts {
    posts: IPost[],
}

export interface IPost {
    id: number,
    userId: number,
    title: string,
    body: string,
    tags: string[],
    reactions: {
        likes: number,
        dislikes: number,
    }
}