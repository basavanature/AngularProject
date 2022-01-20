import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'file2';
 public name="";
public ok="";
public take="";
 logmessge(value: any)
 {
   console.log(value);
  
 }
  
activate(value:any)
 {
 console.log(value);

 }
}



