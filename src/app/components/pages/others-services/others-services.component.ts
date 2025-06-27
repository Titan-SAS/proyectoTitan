import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-others-services',
  templateUrl: './others-services.component.html',
  styleUrl: './others-services.component.scss'
})
export class OthersServicesComponent {

  title = 'Titan - Otros servicios';
  
      constructor(private titleService:Title) {}
      
      ngOnInit() {
          this.titleService.setTitle(this.title);
      }

}
