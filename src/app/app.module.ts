import { NgModule } from '@angular/core';
import { NgxScrollTopModule } from 'ngx-scrolltop';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeDemoOneComponent } from './components/pages/home-demo-one/home-demo-one.component';
import { WhatWeDoComponent } from './components/common/what-we-do/what-we-do.component';
import { ErrorPageComponent } from './components/pages/error-page/error-page.component';
import { CreditDebitCardComponent } from './components/common/credit-debit-card/credit-debit-card.component';
import { SmallToLargeBusinessComponent } from './components/common/small-to-large-business/small-to-large-business.component';
import { DownloadAppComponent } from './components/common/download-app/download-app.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { HomeoneBannerComponent } from './components/pages/home-demo-one/homeone-banner/homeone-banner.component';
import { FeaturesComponent } from './components/common/features/features.component';
import { CtaStyleOneComponent } from './components/common/cta/cta-style-one/cta-style-one.component';
import { CtaStyleTwoComponent } from './components/common/cta/cta-style-two/cta-style-two.component';
import { TestimonialsStyleOneComponent } from './components/common/testimonials/testimonials-style-one/testimonials-style-one.component';
import { TestimonialsStyleTwoComponent } from './components/common/testimonials/testimonials-style-two/testimonials-style-two.component';
import { LoansStyleOneComponent } from './components/common/loans/loans-style-one/loans-style-one.component';
import { LoansStyleTwoComponent } from './components/common/loans/loans-style-two/loans-style-two.component';
import { SimplifyStyleOneComponent } from './components/common/simplify/simplify-style-one/simplify-style-one.component';
import { SimplifyStyleTwoComponent } from './components/common/simplify/simplify-style-two/simplify-style-two.component';
import { SolutionsStyleOneComponent } from './components/common/our-solutions/solutions-style-one/solutions-style-one.component';
import { SolutionsStyleTwoComponent } from './components/common/our-solutions/solutions-style-two/solutions-style-two.component';
import { FunfactsComponent } from './components/common/funfacts/funfacts.component';
import { MissionVisionStyleOneComponent } from './components/common/mission-vision/mission-vision-style-one/mission-vision-style-one.component';
import { MissionVisionStyleTwoComponent } from './components/common/mission-vision/mission-vision-style-two/mission-vision-style-two.component';
import { WhyChooseStyleOneComponent } from './components/common/why-choose-us/why-choose-style-one/why-choose-style-one.component';
import { WhyChooseStyleTwoComponent } from './components/common/why-choose-us/why-choose-style-two/why-choose-style-two.component';
import { PartnerComponent } from './components/common/partner/partner.component';
import { BlogComponent } from './components/common/blog/blog.component';
import { TestimonialsStyleThreeComponent } from './components/common/testimonials/testimonials-style-three/testimonials-style-three.component';
import { SimplifyStyleThreeComponent } from './components/common/simplify/simplify-style-three/simplify-style-three.component';
import { MissionVisionStyleThreeComponent } from './components/common/mission-vision/mission-vision-style-three/mission-vision-style-three.component';
import { NavbarComponent } from './components/common/navbar/navbar.component';
import { AboutPageComponent } from './components/pages/about-page/about-page.component';
import { TeamComponent } from './components/common/team/team.component';
import { AboutComponent } from './components/common/about/about.component';
import { ServicesPageComponent } from './components/pages/services-page/services-page.component';
import { ServicesComponent } from './components/common/services/services.component';
import { ServiceDetailsPageComponent } from './components/pages/service-details-page/service-details-page.component';
import { SdpFeaturesComponent } from './components/pages/service-details-page/sdp-features/sdp-features.component';
import { SdpSimplifyComponent } from './components/pages/service-details-page/sdp-simplify/sdp-simplify.component';
import { GetStartedComponent } from './components/common/get-started/get-started.component';
import { TeamPageComponent } from './components/pages/team-page/team-page.component';
import { BoardOfDirectorsComponent } from './components/pages/team-page/board-of-directors/board-of-directors.component';
import { LeadershipTeamComponent } from './components/pages/team-page/leadership-team/leadership-team.component';
import { PricingComponent } from './components/common/pricing/pricing.component';
import { InvestmentBenefitsComponent } from './components/common/investment-benefits/investment-benefits.component';
import { FaqComponent } from './components/common/faq/faq.component';
import { InvestmentFundsPageComponent } from './components/pages/investment-funds-page/investment-funds-page.component';
import { InvestmentFundsComponent } from './components/common/investment-funds/investment-funds.component';
import { StartInvestComponent } from './components/common/start-invest/start-invest.component';
import { InvestmentsSolutionsComponent } from './components/common/investments-solutions/investments-solutions.component';
import { VideoComponent } from './components/common/video/video.component';
import { PrivacyPolicyPageComponent } from './components/pages/privacy-policy-page/privacy-policy-page.component';
import { TermsConditionsPageComponent } from './components/pages/terms-conditions-page/terms-conditions-page.component';
import { ServicesElectricityComponent } from './components/pages/services-electricity/services-electricity.component';
import { ServicesTelecommunicationsComponent } from './components/pages/services-telecommunications/services-telecommunications.component';
import { ServicesIndustrialMaintenanceComponent } from './components/pages/services-industrial-maintenance/services-industrial-maintenance.component';
import { ServicesEquipmentMaintenanceComponent } from './components/pages/services-equipment-maintenance/services-equipment-maintenance.component';
import { FeaturedProjectsComponent } from './components/pages/featured-projects/featured-projects.component';
import { CustomersComponent } from './components/pages/customers/customers.component';
import { ContactComponent } from './components/pages/contact/contact.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeDemoOneComponent,
        WhatWeDoComponent,
        ErrorPageComponent,
        CreditDebitCardComponent,
        SmallToLargeBusinessComponent,
        DownloadAppComponent,
        FooterComponent,
        HomeoneBannerComponent,
        FeaturesComponent,
        CtaStyleOneComponent,
        CtaStyleTwoComponent,
        TestimonialsStyleOneComponent,
        TestimonialsStyleTwoComponent,
        LoansStyleOneComponent,
        LoansStyleTwoComponent,
        SimplifyStyleOneComponent,
        SimplifyStyleTwoComponent,
        SolutionsStyleOneComponent,
        SolutionsStyleTwoComponent,
        FunfactsComponent,
        MissionVisionStyleOneComponent,
        MissionVisionStyleTwoComponent,
        WhyChooseStyleOneComponent,
        WhyChooseStyleTwoComponent,
        PartnerComponent,
        BlogComponent,
        TestimonialsStyleThreeComponent,
        SimplifyStyleThreeComponent,
        MissionVisionStyleThreeComponent,
        NavbarComponent,
        AboutPageComponent,
        TeamComponent,
        AboutComponent,
        ServicesPageComponent,
        ServicesComponent,
        ServiceDetailsPageComponent,
        SdpFeaturesComponent,
        SdpSimplifyComponent,
        GetStartedComponent,
        TeamPageComponent,
        BoardOfDirectorsComponent,
        LeadershipTeamComponent,
        PricingComponent,
        InvestmentBenefitsComponent,
        FaqComponent,
        InvestmentFundsPageComponent,
        InvestmentFundsComponent,
        StartInvestComponent,
        InvestmentsSolutionsComponent,
        VideoComponent,
        PrivacyPolicyPageComponent,
        TermsConditionsPageComponent,
        ServicesTelecommunicationsComponent,
        ServicesIndustrialMaintenanceComponent,
        ServicesEquipmentMaintenanceComponent,
        FeaturedProjectsComponent,
        CustomersComponent,
        ContactComponent
    ],
    imports: [
        BrowserModule,
        CarouselModule,
        AppRoutingModule,
        NgxScrollTopModule,
        BrowserAnimationsModule,
        ServicesElectricityComponent
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }