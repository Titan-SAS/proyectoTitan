import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  title = 'Titan - Contactanos';
  
      constructor(private titleService:Title) {}
      
      ngOnInit() {
          this.titleService.setTitle(this.title);
      }

}
