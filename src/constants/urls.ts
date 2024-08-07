const baseUrl = 'https://jsonplaceholder.typicode.com';

const urls = {
    users: {
        base: '/users',
        byId: (id: number): string => urls.users.base + '/' + `${id}`,
        postsOfUser: (id: number): string => `${urls.users.base}/${id}/posts`
    },
    posts: {
        base: '/posts',
        byId: (id: number): string => urls.posts.base + '/' +`${id}`,
        commentsOfPost: (id: number): string => `${urls.posts.base}/${id}/comments`
    }
}

export {
    urls,
    baseUrl
}