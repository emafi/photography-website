import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-urban',
  templateUrl: './urban.component.html',
  styleUrls: ['./urban.component.scss']
})

export class UrbanComponent implements OnInit {

  constructor() { 
    //setTimeout(() => {AOS.refresh();}, 100);
  }

  ngOnInit(): void {
    //AOS.init()
    setTimeout(() => {AOS.refresh();}, 100);

  }

}
