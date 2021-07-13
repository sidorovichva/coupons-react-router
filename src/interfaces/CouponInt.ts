import {BeanInt} from "./BeanInt";
import {CategoryInt} from "./CategoryInt";

export interface CouponInt extends BeanInt{
    id: number,
    category: CategoryInt,
    company: string,
    title: string,
    description: string,
    startDate: string,
    endDate: string,
    amount: number,
    price: number,
    image: string,
}