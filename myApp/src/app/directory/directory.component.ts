import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css']
})
export class DirectoryComponent implements OnInit {
  // attribute directive
classes = {'blue': false, 'red': true, 'underline':false}
// structural directives
test = false;
  constructor() { }

  ngOnInit() {
  }

}
