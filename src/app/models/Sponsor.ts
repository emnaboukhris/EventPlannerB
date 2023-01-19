
export class Sponsor  {
    id :number ; 
    name:string;
    logo:string;
    website:string ; 

    constructor(
        id:number,
        name: string, 
        website:string, 
        logo : string , 
        ){
        this.id =id ; 
        this.name=name;
        this.website=website; 
        this.logo =logo ;
       
    }


}