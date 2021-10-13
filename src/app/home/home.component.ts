import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { refresh } from 'aos';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() {
    AOS.refreshHard();
   }

  ngOnInit() {
    AOS.init(
    );
  }



}
