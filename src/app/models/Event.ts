import { Attendee } from "./Attendee";
import { Company } from "./Company";
import { Schedule } from "./Schedule";
import { Speaker } from "./Speaker";
import { Staff } from "./Staff";
import { Ticket } from "./Ticket";
import { Venue } from "./Venue";

export class Event{
    id:number;
    title:string;
    description:string;
    organizer:string;
    dateStart:Date;
    dateEnd:Date;
    venue:Venue;
    speakers:Array<Speaker>;
    attendees:Array<Attendee>;
    schedule:Schedule;
    tickets:Array<Ticket>;
    sponsors:Array<Company>;
    staff:Array<Staff>;

    constructor(id:number,title:string,description:string,organizer:string,dateStart:Date,dateEnd:Date,venue=Venue,speakers:Array<Speaker>,attendees:Array<Attendee>,schedule:Schedule,tickets:Array<Ticket>,sponsors:Array<Company>,staff:Array<Staff>){
this.id=id;
this.title=title;
this.description=description;
this.organizer=organizer;
this.dateStart=dateStart;
this.dateEnd=dateEnd;
this.venue=venue;
this.speakers=speakers;
this.attendees=attendees
this.schedule=schedule;
this.tickets=tickets;
this.sponsors=sponsors;
this.staff=staff;
    }
    

}