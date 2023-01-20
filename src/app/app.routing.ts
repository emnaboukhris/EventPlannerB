import { RouterModule, Routes } from "@angular/router";
import { AdminDetailsComponent } from "./admin/components/admin-details/admin-details.component";
import { AdminEventComponent } from "./admin/components/admin-event/admin-event.component";
import { AdminPricingComponent } from "./admin/components/admin-pricing/admin-pricing.component";
import { AdminProfileComponent } from "./admin/components/admin-profile/admin-profile.component";
import { AdminScheduleComponent } from "./admin/components/admin-schedule/admin-schedule.component";
import { AdminSpeakersComponent } from "./admin/components/speakers/admin-speakers/admin-speakers.component";
import { AdminSopnsorsComponent } from "./admin/components/sponsors/admin-sopnsors/admin-sopnsors.component";
import { AdminVenueComponent } from "./admin/components/admin-venue/admin-venue.component";
import { AboutComponent } from "./home/about/about.component";
import { AdminAddSpeakerComponent } from "./admin/components/speakers/admin-add-speaker/admin-add-speaker.component";
import { AdminUpdateSpeakerComponent } from "./admin/components/speakers/admin-update-speaker/admin-update-speaker.component";
import { EventCreationBaseLayoutComponent } from "./admin/layout/event-creation-base-layout/event-creation-base-layout.component";
import { CreateNewEventComponent } from "./admin/newEvent/create-new-event/create-new-event.component";
import { AdminBaseLayoutComponent } from "./admin/layout/admin-base-layout/admin-base-layout.component";
import { RegisterComponent } from "./register/register.component";
import { LoginComponent } from "./login/login.component";
import { EventListComponent } from "./admin/newEvent/event-list/event-list.component";
import { TemplateComponent } from "./admin/newEvent/steps/template/template.component";
import { NewEventDetailsComponent } from "./admin/newEvent/steps/new-event-details/new-event-details.component";
import { NewEventComponentsComponent } from "./admin/newEvent/steps/new-event-components/new-event-components.component";


const APP_ROUTING : Routes = [
    {path:'',component:EventListComponent },
    {path: 'register', component:RegisterComponent},
    {path: 'login', component:LoginComponent},

    {path:'admin',children :[
        {path:'',component:EventListComponent },

        {
            
            path:'events' ,   children : [
           {path: 'create-event', component:CreateNewEventComponent  , children :[
            {path:'template',component:TemplateComponent}, 
            {path:'new',component:NewEventDetailsComponent}, 
            {path:'components',component:NewEventComponentsComponent}, 


           ]} , 
           {path: ':idEvent', component: AdminBaseLayoutComponent, 
           children: [
            {path:'',component:AdminProfileComponent}, 
            {path:'aftedelete',component:AdminProfileComponent}, 

           {path:'overview',component:AdminProfileComponent}, 
           {path:'profile',component:AdminProfileComponent }, 
           {path:'event',component:AdminEventComponent }, 
           {path:'details',component:AdminDetailsComponent}, 
           {path:'schedule',component:AdminScheduleComponent},
           {path:'pricing',component:AdminPricingComponent}, 
           {path:'speakers',children :[ 
           {path:'',component:AdminSpeakersComponent}, 
           {path:'add',component:AdminAddSpeakerComponent}, 
           {path:'update/:id',component:AdminUpdateSpeakerComponent}, 


    ]
        }, 

]} , 


            ]
        }
    ]}, 


]    

export const ROUTING = RouterModule.forRoot(APP_ROUTING) ; 