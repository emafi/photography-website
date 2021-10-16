import { Component, HostListener, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})

export class PeopleComponent implements OnInit {


  constructor() { 
   //addEventListener('scroll', AOS.refresh);
  }

  ngOnInit(): void {
    //AOS.init();
    setTimeout(() => {AOS.refresh();}, 100);
  }
  
}
