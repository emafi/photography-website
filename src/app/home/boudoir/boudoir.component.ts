import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-boudoir',
  templateUrl: './boudoir.component.html',
  styleUrls: ['./boudoir.component.scss']
})
export class BoudoirComponent implements OnInit {

  constructor() {
    //setTimeout(() => {AOS.refresh();}, 100);
   }

  ngOnInit(): void {
    //AOS.init()
    setTimeout(() => {AOS.refresh();}, 100);

  }

}
