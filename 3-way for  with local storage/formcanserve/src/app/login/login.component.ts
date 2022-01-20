import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  hi: string = '';
  flag: boolean = false;
  constructor() {}

  onSubmit(form: NgForm) {
    let size;
    var array = localStorage.getItem('arrayOfObjects');
    let v = localStorage.getItem('arrayOfObjects');
    if (v !== null) {
      size = JSON.parse(v);
    }

    for (let o of size) {
      if (form.value.uname === o.uName && form.value.upass === o.pWord) {
        this.hi = 'found';
      } else {
        console.log('not entered');
      }
    }
  }

  ngOnInit(): void {}
}
