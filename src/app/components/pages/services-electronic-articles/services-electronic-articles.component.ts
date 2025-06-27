import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-services-electronic-articles',
  templateUrl: './services-electronic-articles.component.html',
  styleUrl: './services-electronic-articles.component.scss'
})
export class ServicesElectronicArticlesComponent {

  title = 'Titan - Servicios de artículos electrónicos';
  
      constructor(private titleService:Title) {}
      
      ngOnInit() {
          this.titleService.setTitle(this.title);
      }

}
