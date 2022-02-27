import { User } from "../models/usuario.model";

export class Security {
    public static set(user: User, token: string) {      
        const data = JSON.stringify(user);
        console.log(data);
        localStorage.setItem('gestor.user',  btoa(data));
        localStorage.setItem('gestor.token', token);
    }

    public static setUser(user: User) {
        const data = JSON.stringify(user);
        localStorage.setItem('gestor.user',  btoa(data));
    }

    public static setToken(token: string) {
        localStorage.setItem('gestor.token', token);
    }

    public static getUser(): User {
        const data = localStorage.getItem('gestor.user');
        if (data) {
            return JSON.parse(atob(data));
        } else {
            return JSON.parse("");
        }
    }

    public static getToken(): string {
        const data = localStorage.getItem('gestor.token');
        if (data) {
            return data;
        } else {
            return "";
        }
    }

    public static hasToken(): boolean {
        if (this.getToken())
            return true;
        else
            return false;
    }

    public static clear() {
        localStorage.removeItem('gestor.user');
        localStorage.removeItem('gestor.token');
    }
}