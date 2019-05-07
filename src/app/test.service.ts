import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor() { }

  printtoConsole(arg: string): void {
    console.log(arg);
  }

}
