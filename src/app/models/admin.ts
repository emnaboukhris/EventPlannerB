export class Admin{
    id: number;
    //image:string;
    firstName:string;
    lastName:string;
    //facebookLink:string;
   // instaLink:string;
    email:string;
    password: string;
   // linkedinLink:string;
    constructor(id:number, firstName:string,lastName:string, email:string,password:string){
        this.id=id;
        //this.image=image;
        this.firstName=firstName;
        this.lastName=lastName;
       // this.facebookLink=facebookLink;
       // this.instaLink=instaLink;
        this.email=email;
        this.password=password;
       // this.linkedinLink=linkedinLink;
    }

}
