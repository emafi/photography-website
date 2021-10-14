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



  // @HostListener("document: scroll")
  // scrollFunction(){    
  //   if ((    document.documentElement.scrollTop >= 0 && document.documentElement.scrollLeft >= 0)){
  //     this.scroll_var = false;
  //   } else if ((    document.documentElement.scrollTop < 0 && document.documentElement.scrollLeft < 0)){
  //     this.scroll_var = false;
  //   }
  // }

  // @HostListener("document: scroll")
  // scrollFunction(){    
  //   var bounding = document.documentElement.getBoundingClientRect();
  //   if (bounding.top <= 0 &&
  //     bounding.left == 0 
  //     ) {
  //       this.scroll_var = true;} 
  //     else if (
  //       bounding.top >= 0 &&
  //       bounding.left >= 0 
  //     ) {
  //     this.scroll_var = false;
  //   }

  //   console.log(bounding.top, bounding.left)
  // }

}
