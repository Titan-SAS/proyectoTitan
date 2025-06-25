import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './components/pages/error-page/error-page.component';
import { HomeDemoOneComponent } from './components/pages/home-demo-one/home-demo-one.component';
import { AboutPageComponent } from './components/pages/about-page/about-page.component';
import { PrivacyPolicyPageComponent } from './components/pages/privacy-policy-page/privacy-policy-page.component';
import { ServicesElectricityComponent } from './components/pages/services-electricity/services-electricity.component';
import { ServicesTelecommunicationsComponent } from './components/pages/services-telecommunications/services-telecommunications.component';
import { ServicesElectronicArticlesComponent } from './components/pages/services-electronic-articles/services-electronic-articles.component';
import { OthersServicesComponent } from './components/pages/others-services/others-services.component';
import { CustomersComponent } from './components/pages/customers/customers.component';
import { ContactComponent } from './components/pages/contact/contact.component';

const routes: Routes = [
    {path: '', component: HomeDemoOneComponent},
    {path: 'about', component: AboutPageComponent},
    {path: 'privacy-policy', component: PrivacyPolicyPageComponent},
    {path: 'services-electricity', component: ServicesElectricityComponent},
    {path: 'services-telecommunications', component: ServicesTelecommunicationsComponent},
    {path: 'services-electronic-articles', component: ServicesElectronicArticlesComponent},
    {path: 'others-services', component: OthersServicesComponent},
    {path: 'customers', component: CustomersComponent},
    {path: 'contact', component: ContactComponent},
    // Here add new pages component

    {path: '**', component: ErrorPageComponent} // This line will remain down from the whole pages component list
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }