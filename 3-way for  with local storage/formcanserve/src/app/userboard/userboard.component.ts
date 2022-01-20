import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userboard',
  templateUrl: './userboard.component.html',
  styleUrls: ['./userboard.component.css']
})
export class UserboardComponent implements OnInit {
  objects:any

  constructor() { }

  ngOnInit(): void {
    let size;
    let v = localStorage.getItem('arrayOfObjects');
    if (v !== null) {
      this.objects = JSON.parse(v);
    }
  }

}
