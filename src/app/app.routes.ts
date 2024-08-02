import { Routes } from '@angular/router';
import { DepartmentComponent } from './pages/department/department.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { AerospaceComponent } from './pages/aerospace/aerospace.component';
import { BankingComponent } from './pages/banking/banking.component';
import { GisComponent } from './pages/gis/gis.component';
import { HealthcareComponent } from './pages/healthcare/healthcare.component';
import { IndustrialComponent } from './pages/industrial/industrial.component';
import { InsuranceComponent } from './pages/insurance/insurance.component';
import { LocomotiveComponent } from './pages/locomotive/locomotive.component';
import { MobilityComponent } from './pages/mobility/mobility.component';

export const routes: Routes = [



{path:"",component:HomeComponent},
    {path:'contactus',component:ContactUsComponent},
    {path:'department',component:DepartmentComponent},
    {path:'AboutUs',component:AboutUsComponent},
    {path:'aerospace',component:AerospaceComponent},
    {path:'banking',component:BankingComponent},
    {path:'gis',component:GisComponent},
    {path:'healthcare',component:HealthcareComponent},
    {path:'industrial',component:IndustrialComponent},
    {path:'insurance',component:InsuranceComponent},
    {path:'locomotive',component:LocomotiveComponent},
    {path:'mobility',component:MobilityComponent},
];