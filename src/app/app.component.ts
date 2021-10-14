import { Component, HostListener } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  title = 'photography-website';

  ngDoCheck() {
    //addEventListener('scroll', AOS.refresh);
  }

  ngOnInit() {
    AOS.init();
    // addEventListener('scroll', AOS.refresh);
  }

}
