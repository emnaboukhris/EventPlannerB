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
import { AuthGuard } from "./guards/auth.guard";
import { AdminAddSopnsorComponent } from "./admin/components/sponsors/admin-add-sopnsor/admin-add-sopnsor.component";
import { AdminUpdateSopnsorComponent } from "./admin/components/sponsors/admin-update-sopnsor/admin-update-sopnsor.component";
import { OverViewComponent } from "./over-view/over-view.component";
import { PublishEventComponent } from "./publish-event/publish-event.component";

const APP_ROUTING : Routes = [
    {path:'',component:OverViewComponent },
    {path:'publishEvent/:id',component:PublishEventComponent },
    {path: 'register', component:RegisterComponent},
    {path: 'login', component:LoginComponent},

    {path:'admin', canActivate: [AuthGuard] ,children :[
        {path:'',component:EventListComponent, canActivate: [AuthGuard]  },

        {
            
            path:'events' ,   canActivate: [AuthGuard] , children : [
           {path: 'create-event', component:CreateNewEventComponent, canActivate: [AuthGuard] , children :[
            {path:'template',component:TemplateComponent,  canActivate: [AuthGuard] }, 
            {path:'new',component:NewEventDetailsComponent,  canActivate: [AuthGuard] }, 
            {path:'components',component:NewEventComponentsComponent,  canActivate: [AuthGuard] }, 


           ]} , 
           {path: ':idEvent', component: AdminBaseLayoutComponent, canActivate: [AuthGuard] , 
           children: [
            {path:'',component:AdminProfileComponent,  canActivate: [AuthGuard] }, 
            {path:'aftedelete',component:AdminProfileComponent,  canActivate: [AuthGuard] }, 

           {path:'overview',component:AdminProfileComponent, canActivate: [AuthGuard] }, 
           {path:'profile',component:AdminProfileComponent,  canActivate: [AuthGuard]  }, 
           {path:'event',component:AdminEventComponent, canActivate: [AuthGuard]  }, 
           {path:'details',component:AdminDetailsComponent, canActivate: [AuthGuard] }, 
           {path:'schedule',component:AdminScheduleComponent, canActivate: [AuthGuard] },
           {path:'pricing',component:AdminPricingComponent, canActivate: [AuthGuard] }, 
           {path:'speakers',children :[ 
           {path:'',component:AdminSpeakersComponent, canActivate: [AuthGuard] }, 
           {path:'add',component:AdminAddSpeakerComponent, canActivate: [AuthGuard] }, 
           {path:'update/:id',component:AdminUpdateSpeakerComponent, canActivate: [AuthGuard] }, 
    ]
        },
        {path:'sponsors',children :[ 
            {path:'',component:AdminSopnsorsComponent, canActivate: [AuthGuard] }, 
            {path:'add',component:AdminAddSopnsorComponent, canActivate: [AuthGuard] }, 
            {path:'update/:id',component:AdminUpdateSopnsorComponent, canActivate: [AuthGuard] },
        ]} 
]} , 


            ]
        }
    ]}, 


]    

export const ROUTING = RouterModule.forRoot(APP_ROUTING) ; 