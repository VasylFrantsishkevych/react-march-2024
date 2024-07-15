export interface IResponsePosts {
    posts: IPost[],
}

export interface IPost {
    userId: number;
    id: number;
    title: string;
    body: string;
}