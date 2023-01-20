import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Speaker } from 'src/app/models/Speaker';
import { Sponsor } from 'src/app/models/Sponsor';
import { SponsorService } from 'src/app/services/sponsor.service';
@Component({
  selector: 'app-admin-update-sopnsor',
  templateUrl: './admin-update-sopnsor.component.html',
  styleUrls: ['./admin-update-sopnsor.component.css'],
})
export class AdminUpdateSopnsorComponent implements OnInit {
  imageSrc: string = 'srcassetsimagesprofile.jpeg';
  eventId!: number;
  updateSponsorForm!: FormGroup;
  sponsor!: Sponsor;
  speakerForm!: FormGroup;
  sponsorId!: number;
  errorMessage: string = '';
  formData = new FormData();

  uploadFile(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.imageSrc = e.target.result;
    };
    reader.readAsDataURL(file);

    this.formData.append('logo', file);
  }

  constructor(
    private _formBuilder: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private sponsorService: SponsorService
  ) {}

  ngOnInit(): void {
    this.updateSponsorForm = this._formBuilder.group({
      name: ['', Validators.required],
      website: ['', Validators.required],
      logo: [''],
    });this.activatedRoute.parent?.parent?.params.subscribe(
      (params)=> {
        this.eventId = +params['idEvent'];

      }
    )
    this.activatedRoute.params.subscribe(
      (params)=> {
        console.log("params :" ,params['id'])
      this.sponsorId = +params['id'];

      this.sponsorService.getSponsorById(+this.sponsorId).subscribe((sponsor: Sponsor) => {
        this.sponsor = sponsor;
        this.updateSponsorForm!.patchValue({
          name: this.sponsor.name,
          website: this.sponsor.website,
        });
        this.imageSrc=this.sponsor.logo ;
      });
    } , 
    (error)=>{
      console.log(error)
      this.errorMessage="probleme de connexion à votre serveur" ; 
    })

  }

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });

  updateSponsor(): void {
    this.formData.append('name', this.updateSponsorForm!.value.name);
    this.formData.append('website', this.updateSponsorForm!.value.website);

    console.log('this is the sponsor ', this.formData.get('name'));
    console.log(this.activatedRoute.parent);
    this.updateSponsorForm!.value['id'] = +this.sponsorId;

    this.sponsorService.updateSponsor(this.updateSponsorForm!.value).subscribe(
      (response: any) => {
        console.log('Promise resolved with data:', response);
        console.log('Speaker: ', this.sponsor);
        let link = 'admin/events/' + this.eventId + '/sponsors';
        this.router.navigate([link]);
      },
      (error: any) => {
        console.log('Promise rejected with error:', error);
      }
    );
  }
}
