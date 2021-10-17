import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-urban',
  templateUrl: './urban.component.html',
  styleUrls: ['./urban.component.scss']
})

export class UrbanComponent implements OnInit {

  constructor() { 
  }

  ngOnInit(): void {
    setTimeout(() => {AOS.refresh();}, 100);

  }

}
