export type User = {
    userId: string;
    gender?: string;
    firstname?: string;
    lastname?: string;
    email: string;
    password: string;
    refreshToken?: string;
}

export type UserInput = Partial<User>