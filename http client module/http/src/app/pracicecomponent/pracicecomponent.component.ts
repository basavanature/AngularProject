import { Component, OnInit } from '@angular/core';
import { PracticesService } from '../service/practices.service';

@Component({
  selector: 'app-pracicecomponent',
  templateUrl: './pracicecomponent.component.html',
  styleUrls: ['./pracicecomponent.component.css']
})
export class PracicecomponentComponent implements OnInit {

  constructor(private practice:PracticesService) { }
  result: any;

  ngOnInit(): void {
      this.practice.getApiData().subscribe((data)=>{
        this.result=data;
      })
  }

}
