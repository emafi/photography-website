import { Component, OnInit, AfterViewInit, HostListener } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() {
    //setTimeout(() => {AOS.refresh();}, 100);
  }

  ngOnInit() {
    AOS.init()
  }

  

}
