import { Event } from "./Event";

export class SpeakersComponent{
    id:number;
    title:string;
    content:Event
    constructor( id:number,title:string,content:Event){
        this.id=id;
        this.title=title;
        this.content=content;
    }
}