import { Component, OnInit } from '@angular/core';
import { AlertPromise } from 'selenium-webdriver';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  
})
export class HomeComponent implements OnInit {
  name = "John Doe"
  show = false;
  
  // pass data from view and use it in a method
  welcomeMe(userName:string){
    this.name = userName
    this.show = true

  }
  constructor() { }
  ngOnInit() {
  }

}
