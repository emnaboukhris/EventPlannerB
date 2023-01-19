
export class Speaker  {
    id :number ;  
    job:string;
    company:string;
    description:string;
    eventId: number ; 
    email : string ; 
   firstName : string ; 
   lastName : string ; 
   image : string ;
   linkedinLink:string ; 

    constructor(
        id:number,
        eventId: number, 
        email : string , 
        firstname : string ,
        lastName : string ,
        job:string,
        company:string,
        description:string, 
        image : string ,
        linkedinLink : string 
        ){
        this.id =id ; 
        this.job=job;
        this.image =image ;
        this.email= email ; 
        this.firstName =firstname ; 
        this.lastName = lastName ; 
        this.eventId=eventId ; 
        this.company=company;
        this.description=description;
        this.linkedinLink=linkedinLink ; 
       
    }


}