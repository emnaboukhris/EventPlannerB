import { Person } from "./Person";

export class Staff extends Person{
poste:string;
constructor(id:number,image:string,firstName:string,lastName:string,facebookLink:string,instaLink:string,gmail:string,linkedInLink:string,poste:string){
    super(id,image,firstName,lastName,facebookLink,instaLink,gmail,linkedInLink);
    this.poste=poste;
   
}
}