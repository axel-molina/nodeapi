import { Auth } from "./auth.interface";

export interface User extends Auth {
    bank: number;
    avatar: string;
    name: string;
    lastName: string;
}

