import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './components/pages/error-page/error-page.component';
import { HomeDemoOneComponent } from './components/pages/home-demo-one/home-demo-one.component';
import { AboutPageComponent } from './components/pages/about-page/about-page.component';
import { ServicesPageComponent } from './components/pages/services-page/services-page.component';
import { ServiceDetailsPageComponent } from './components/pages/service-details-page/service-details-page.component';
import { TeamPageComponent } from './components/pages/team-page/team-page.component';
import { InvestmentFundsPageComponent } from './components/pages/investment-funds-page/investment-funds-page.component';
import { PrivacyPolicyPageComponent } from './components/pages/privacy-policy-page/privacy-policy-page.component';
import { TermsConditionsPageComponent } from './components/pages/terms-conditions-page/terms-conditions-page.component';

const routes: Routes = [
    {path: '', component: HomeDemoOneComponent},
    {path: 'about', component: AboutPageComponent},
    {path: 'services', component: ServicesPageComponent},
    {path: 'service-details', component: ServiceDetailsPageComponent},
    {path: 'team', component: TeamPageComponent},
    {path: 'investment-funds', component: InvestmentFundsPageComponent},
    {path: 'privacy-policy', component: PrivacyPolicyPageComponent},
    {path: 'terms-conditions', component: TermsConditionsPageComponent},
    // Here add new pages component

    {path: '**', component: ErrorPageComponent} // This line will remain down from the whole pages component list
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }