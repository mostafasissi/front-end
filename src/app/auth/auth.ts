export const userList: User[] = [];

interface User {
    username: string | null | undefined;
    password: string | null | undefined;
    fullName: string | null | undefined;
}