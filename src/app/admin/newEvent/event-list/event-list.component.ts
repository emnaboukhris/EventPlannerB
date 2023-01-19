import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {
  p: number = 1;
  imageSrc :string ="src\assets\images\profile.jpeg"


events : any[]= [
  {
    id:"1", 
title : "test1", 
dates : "12:2:2000", 
registrations:"" , 
status : "draft"

  }
  ,  {
    id:"2", 

    title : "test2", 
    dates : "12:2:2000", 
    registrations:"" , 
    status : "draft"
    
      },  {
        id:"3", 

        title : "test3", 
        dates : "12:2:2000", 
        registrations:"" , 
        status : "draft"
        
          },  {
            id:"4", 

            title : "test4", 
            dates : "12:2:2000", 
            registrations:"" , 
            status : "draft"
            
              },  {
                id:"5", 

                title : "test5", 
                dates : "12:2:2000", 
                registrations:"" , 
                status : "draft"
                
                  }
]
  searchTerm: string="";

  
  addOption() {

    const link = ['admin/events/create-event'] ; 
    this.router.navigate(link)

  }
    editingIndex = -1;
  
    update(id: string) {
      const link = ['admin/speakers/update' ,id] ; 
      this.router.navigate(link)
  
     
    }
  
    delete(id: string) {
      // Logic to delete the user at the specified index
    }


  constructor(private router :Router) { }

  ngOnInit(): void {
  }

}
