import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpeakersListComponent } from './home/speakers/speakers-list/speakers-list.component';
import { SpeakersItemComponent } from './home/speakers/speakers-item/speakers-item.component';
import { AboutComponent } from './home/about/about.component';
import { ContactComponent } from './home/contact/contact.component';
import { VenueComponent } from './home/venue/venue.component';
import { PricingListComponent } from './home/pricing/pricing-list/pricing-list.component';
import { PricingItemComponent } from './home/pricing/pricing-item/pricing-item.component';
import { ScheduleComponent } from './home/schedule/schedule.component';
import { BannerComponent } from './home/banner/banner.component';
import { BlogComponent } from './home/blog/blog.component';
import { SponsorsComponent } from './home/sponsors/sponsors.component';
import { IntroListComponent } from './home/intro/intro-list/intro-list.component';
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from './footer/footer.component';
import { DetailsComponent } from './home/details/details.component';
import { IntroCardComponent } from './home/intro/intro-card/intro-card.component';
import { AdminSidebarComponent } from "./admin/layout/admin-sidebar/admin-sidebar.component";
import { AdminNavbarComponent } from "./admin/layout/admin-navbar/admin-navbar.component";
import { AdminDetailsComponent } from "./admin/components/admin-details/admin-details.component";
import { AdminFooterComponent } from "./admin/layout/admin-footer/admin-footer.component";
import { AdminBaseLayoutComponent } from './admin/layout/admin-base-layout/admin-base-layout.component';
import { AdminProfileComponent } from './admin/components/admin-profile/admin-profile.component';
import { ROUTING } from './app.routing';
import { NgForm } from '@angular/forms';
import { AdminScheduleComponent } from './admin/components/admin-schedule/admin-schedule.component';
import { CreateNewEventComponent } from './admin/newEvent/create-new-event/create-new-event.component';
import { AdminEventComponent } from './admin/components/admin-event/admin-event.component';
import { AdminAddSpeakerComponent } from './admin/components/speakers/admin-add-speaker/admin-add-speaker.component';
import { AdminUpdateSpeakerComponent } from './admin/components/speakers/admin-update-speaker/admin-update-speaker.component';
import { AdminSpeakersComponent } from './admin/components/speakers/admin-speakers/admin-speakers.component';
import { EventCreationBaseLayoutComponent } from './admin/layout/event-creation-base-layout/event-creation-base-layout.component';
import { NewEventComponentsComponent } from './admin/newEvent/steps/new-event-components/new-event-components.component';
import { EventObjectifComponent } from './admin/newEvent/event-objectif/event-objectif.component';
import { EventListComponent } from './admin/newEvent/event-list/event-list.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FilterPipe } from './pipes/filter.pipe';
import { NewEventDetailsComponent } from "./admin/newEvent/steps/new-event-details/new-event-details.component";
import { TemplateComponent } from "./admin/newEvent/steps/template/template.component";
import { HttpClientModule } from '@angular/common/http';
import { AdminAddSopnsorComponent } from './admin/components/sponsors/admin-add-sopnsor/admin-add-sopnsor.component';
import { AdminUpdateSopnsorComponent } from './admin/components/sponsors/admin-update-sopnsor/admin-update-sopnsor.component';
import { AdminSopnsorsComponent } from './admin/components/sponsors/admin-sopnsors/admin-sopnsors.component';
import { AuthService } from './services/auth-service.service';
import { EventsService } from './services/events-service.service';
import { AuthGuard } from './guards/auth.guard';
import { CurrentUserService } from './services/current-user.service';
import { TokenService } from './services/token.service';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import {  HTTP_INTERCEPTORS } from '@angular/common/http';


@NgModule({
    declarations: [
        AppComponent,
        AdminEventComponent,
        EventListComponent,
        NewEventComponentsComponent,
        CreateNewEventComponent,
        EventObjectifComponent,
        NewEventDetailsComponent,
        SpeakersListComponent,
        SpeakersItemComponent,
        TemplateComponent,
        AboutComponent,
        ContactComponent,
        VenueComponent,
        PricingListComponent,
        PricingItemComponent,
        ScheduleComponent,
        BannerComponent,
        BlogComponent,
        SponsorsComponent,
        IntroListComponent,
        HeaderComponent,
        FooterComponent,
        DetailsComponent,
        IntroCardComponent,
        AdminSidebarComponent,
        AdminNavbarComponent,
        AdminDetailsComponent,
        AdminFooterComponent,
        AdminBaseLayoutComponent,
        AdminProfileComponent,
        AdminScheduleComponent, AdminAddSpeakerComponent, AdminUpdateSpeakerComponent, AdminSpeakersComponent, EventCreationBaseLayoutComponent,
         FilterPipe,
        AdminAddSopnsorComponent,
        AdminUpdateSopnsorComponent,
        AdminSopnsorsComponent,
        RegisterComponent,LoginComponent


    ],
    providers: [

        EventsService,
        AuthService,
        AuthGuard,
        CurrentUserService,
        TokenService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: TokenInterceptor,
            multi: true,
          },    

    ],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ROUTING,
        CommonModule,
        FormsModule,
        BrowserModule,
        ReactiveFormsModule,
        NgxPaginationModule,
        HttpClientModule
    ]
})
export class AppModule { }
