import { Component } from '@angular/core';
import { User } from './login/login.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-frontend';
  user: User;
  inputText:string = "default";

  constructor(){
     this.user = new User;
     this.user.name = "Charan";
     this.user.password = "admin";
     this.user.contactNumbers = ["9600181051","8754536250"];
  }
}
