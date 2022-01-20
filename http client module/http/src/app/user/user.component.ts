import { Component, OnInit } from '@angular/core';
import { HttpserviceService } from '../srvice/httpservice.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  result: any;
  constructor(private user: HttpserviceService) {}

  ngOnInit(): void {
    this.user.getApiData().subscribe((data) => {
      this.result = data;
    });
  }
}
