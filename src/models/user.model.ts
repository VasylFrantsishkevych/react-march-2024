export type IResponseUsers = {
    users: IUser[];
}

export type IUser = {
    id: number,
    firstName: string,
    lastName: string,
    maidenName: string,
    age: number,
    gender: string,
    email: string,
    phone: string,
}