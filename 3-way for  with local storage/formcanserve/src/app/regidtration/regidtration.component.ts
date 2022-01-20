import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-regidtration',
  templateUrl: './regidtration.component.html',
  styleUrls: ['./regidtration.component.css'],
})
export class RegidtrationComponent implements OnInit {
  onSubmit(form: NgForm) {
    let userName = form.value.uename;
    let password = form.value.upass;

    let o = {
      uName: userName,
      pWord: password,
    };

    let size;
    let v = localStorage.getItem('arrayOfObjects');
    if (v !== null) {
      size = JSON.parse(v);
    }

    size.push(o);
    let value = JSON.stringify(size);

    localStorage.setItem('arrayOfObjects', value);
    window.alert('data entered');
  }

  constructor() {}

  ngOnInit(): void {}
}
