import {BeanInt} from "./BeanInt";

export interface CompanyInt extends BeanInt{
    id: number,
    name: string,
    email: string,
    password: string,
}