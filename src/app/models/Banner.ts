import { Event } from "./Event";
export class Banner{
    id:number;
    bannerContent:Event;
    backgroundImage:string;
    constructor(id:number,bannerContent:Event,backgroundImage:string){
        this.id=id;
        this.bannerContent=bannerContent;
        this.backgroundImage=backgroundImage;
    }
}