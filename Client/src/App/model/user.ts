export interface User {
    id: string
    displayName: string,
    username: string,
    token: string
}

export interface Credentials {
    email: string,
    password: string
    displayName: string,
    username: string,
}

export class IntialUserCredentials implements Credentials {
    email = "";
    password = "";
    displayName = "";
    username = "";

    constructor(registerData?: Credentials) {
        if (registerData) {
            this.email = registerData.email;
            this.password = registerData.password;
            this.displayName = registerData.displayName;
            this.username = registerData.username;
        }
    }
}

export class IntialUserLogin implements Pick<Credentials, "email" | "password"> {
    email = "";
    password = "";

    constructor(loginData?: Pick<Credentials, "email" | "password">) {
        if (loginData) {
            this.email = loginData.email;
            this.password = loginData.password;
        }
    }
}
