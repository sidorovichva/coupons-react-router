import {BeanInt} from "./BeanInt";

export interface CustomerInt extends BeanInt{
    id: number,
    firstName: string,
    lastName: string,
    email: string,
    password: string,
}