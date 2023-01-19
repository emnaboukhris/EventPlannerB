import { Event } from "./Event";
export class Banner{
    id:number;
    eventId:number
    bannerContent:Event;
    backgroundImage:string;
    constructor(id:number,bannerContent:Event,backgroundImage:string ,eventId :number){
        this.id=id;
        this.eventId=eventId
        this.bannerContent=bannerContent;
        this.backgroundImage=backgroundImage;
    }
}