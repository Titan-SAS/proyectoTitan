import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-services-electricity',
  templateUrl: './services-electricity.component.html',
  styleUrl: './services-electricity.component.scss'
})
export class ServicesElectricityComponent {

  Title = 'Servicios Electricos - Titan';

  constructor(private titleService: Title) {}

  ngOnInit() {
    this.titleService.setTitle(this.Title);
  }

}
