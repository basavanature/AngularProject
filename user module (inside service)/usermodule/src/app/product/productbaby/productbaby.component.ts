import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productbaby',
  templateUrl: './productbaby.component.html',
  styleUrls: ['./productbaby.component.css']
})
export class ProductbabyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('hey baby is sending message to mother');
    
  }

}
