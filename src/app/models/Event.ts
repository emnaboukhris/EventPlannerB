import { Attendee } from "./Attendee";
import { Schedule } from "./Schedule";
import { Speaker } from "./Speaker";
import { Sponsor } from "./Sponsor";
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
    sponsors: Array<Sponsor>
    schedule:Schedule;
    tickets:Array<Ticket>;
    staff:Array<Staff>;

    constructor(id:number,title:string,description:string,organizer:string,dateStart:Date,dateEnd:Date,venue=Venue,speakers:Array<Speaker>,attendees:Array<Attendee>,schedule:Schedule,tickets:Array<Ticket>,sponsors:Array<Sponsor>,staff:Array<Staff>){
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