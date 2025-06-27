import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-services-telecommunications',
  templateUrl: './services-telecommunications.component.html',
  styleUrl: './services-telecommunications.component.scss'
})
export class ServicesTelecommunicationsComponent {

  title = 'Titan - Servicios de telecomunicaciones';
  
      constructor(private titleService:Title) {}
      
      ngOnInit() {
          this.titleService.setTitle(this.title);
      }

}
