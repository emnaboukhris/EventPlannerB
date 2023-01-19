import { Currency } from "../Enum/Currency";

export class Ticket{
    id:number;
    title:string;
    currency:Currency;
    price:number;
    availableNumber:number;
    totalNumber:number;
    constructor(id:number,title:string,currency:Currency,price:number,availableNumber:number,totalNumber:number){
        this.id=id;
        this.title=title;
        this.currency=currency;
        this.price=price;
        this.availableNumber=availableNumber;
        this.totalNumber=totalNumber;
    }

}