declare function login(username: string, password: string): {
    token: string;
} | undefined;
export default login;
