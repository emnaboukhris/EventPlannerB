import { Currency } from "../Enum/Currency";

export class Ticket{
    id:number;
    eventId : number  ; 
    title:string;
    currency:Currency;
    price:number;
    availableNumber:number;
    totalNumber:number;
    constructor(eventId : number,id:number,title:string,currency:Currency,price:number,availableNumber:number,totalNumber:number){
        this.id=id;
        this.eventId = eventId ; 
        this.title=title;
        this.currency=currency;
        this.price=price;
        this.availableNumber=availableNumber;
        this.totalNumber=totalNumber;
    }

}