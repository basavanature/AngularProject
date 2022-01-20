import { getLocaleDirection } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'interproperty';
  public name="hello existance i love your game of lifecycle";
  public change="email";
  // public successclass="text-danger";
  public hasError=false;
  public isspecail=true;
  public stylecolor="red";
 public messageclasses=
 {
   "text-success":!this.hasError,
   "text-danger":this.hasError,
    "text-special" :this.isspecail
   }
public styles={
  color: "red",
  fontStyle:"italic"

}
public see="";
public mind="";


  greet()
  {

  let a=60,b=10,nn;
   nn=a+b;

    return "buddha says "+" "+this.name +' '+nn;
  }
  onclick()
  {
    console.log("welcome to the world");
    return this.see="welcome"
    
  }
  onclickof()
  {
    console.log("observe sarroundings do not dwell in it");
    return this.mind="observe sarroundings do not dwell in it";
  }
  onpress()
  {
    console.log("user pressed");
   return this.see="pressed hard"
  }
}
