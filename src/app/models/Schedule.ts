import { Session } from "./Session";


export class Schedule{
    id:number;
    eventId:number ; 
    description:string;
    sessions:Array<Session>;
constructor(id:number,description:string,sessions:Array<Session> , eventId:number){
    this.id=id;
    this.eventId =eventId; 
    this.description=description;
    this.sessions=sessions;
}

}