import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-customers',
    templateUrl: './customers.component.html',
    styleUrl: './customers.component.scss',
})
export class CustomersComponent {
    title = 'Titan - Clientes';

    constructor(private titleService: Title) {}

    ngOnInit() {
        this.titleService.setTitle(this.title);
    }
}
