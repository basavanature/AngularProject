import { Component } from '@angular/core';

@Component({    
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'file4';
  public se="";
  public name="";
  public result:any
  getData(value:any){
    this.result-value
  }
  flag:boolean=true
  change(){
    if(this.flag===true)
    {
      this.flag=false
    }else{
      this.flag=true
    }
  }

}
