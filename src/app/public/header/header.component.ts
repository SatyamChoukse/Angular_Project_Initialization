import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit,OnChanges{
  
  public token:boolean=false;
  
  ngOnChanges(): void {
    if(localStorage.getItem('jwtToken')){
      this.token=!this.token;
    }
  }

  ngOnInit(): void {
    if(localStorage.getItem('jwtToken')){
      this.token=!this.token;
    }
  }

  public logout(){
    localStorage.clear();
    this.token=!this.token;
  }
  
}
