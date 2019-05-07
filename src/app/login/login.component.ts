import { Component, OnInit, Input } from '@angular/core';
import { User } from './login.model';
import { TestService } from '../test.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Input('name') user:User;
  message:string = new Date().toDateString();
  message1:any;
  isCollapsed: boolean = true;  
  private svc: TestService;
  private http: HttpClient;


  constructor(svc: TestService,http: HttpClient) { 
    this.svc = svc;
    this.http = http;
  }

  ngOnInit() {
    this.message1 = {
      name: 'Charan',
      offers: [
        'takeaway',
        'deloitte',
        'MS'
      ]
    };
  }


  toggleFunction(): void{
    this.isCollapsed = !this.isCollapsed;
    this.svc.printtoConsole("toggler function invoked.");
    let obs = this.http.get('https://api.github.com/users/charantej224');
    obs.subscribe((response) => 
      console.log(response)
    )
    
  }

}
