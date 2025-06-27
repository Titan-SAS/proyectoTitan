import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-privacy-policy-page',
    templateUrl: './privacy-policy-page.component.html',
    styleUrls: ['./privacy-policy-page.component.scss']
})
export class PrivacyPolicyPageComponent {

    title = 'Titan - Politica de privacidad';

    constructor(private titleService:Title) {}
    
    ngOnInit() {
        this.titleService.setTitle(this.title);
    }

}