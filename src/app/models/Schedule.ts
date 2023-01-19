import { Session } from "./Session";


export class Schedule{
    id:number;
    description:string;
    sessions:Array<Session>;
constructor(id:number,description:string,sessions:Array<Session>){
    this.id=id;
    this.description=description;
    this.sessions=sessions;
}

}