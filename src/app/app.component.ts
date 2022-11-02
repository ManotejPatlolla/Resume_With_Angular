import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  resume: any = null;
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    
     this.http.get('https://gist.githubusercontent.com/ManotejPatlolla/b23baa378b2359a27f2d38fd9e3b4280/raw/bbd3cc22e5a108a4dc529a8ac4f6b379892e5330/resume-app.json')
     .subscribe(res =>{
      this.resume = res;
      console.log(res);
     });
  }
  

  
}
