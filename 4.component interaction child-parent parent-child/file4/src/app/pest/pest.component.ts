import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pest',
  templateUrl: './pest.component.html',
  styleUrls: ['./pest.component.css']
})
export class PestComponent implements OnInit {


 @Output() message:EventEmitter<string>=new EventEmitter<String>()
 passData(){
   this.message.emit("this data came from child component")
 }

  constructor() { }

  ngOnInit(): void {
  }


}
