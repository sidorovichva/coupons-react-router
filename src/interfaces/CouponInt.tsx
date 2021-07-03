import {BeanInt} from "./BeanInt";

export interface CouponInt extends BeanInt{
    id: number,
    category: string,
    company: string,
    title: string,
    description: string,
    startDate: Date,
    endDate: Date,
    amount: string,
    price: string,
    image: string,
}