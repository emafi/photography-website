import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-nature',
  templateUrl: './nature.component.html',
  styleUrls: ['./nature.component.scss']
})
export class NatureComponent implements OnInit {

  constructor() { 
  }

  ngOnInit(): void {
    setTimeout(() => {AOS.refresh();}, 100);
  }

}
