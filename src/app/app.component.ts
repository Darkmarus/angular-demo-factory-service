import { Component, Inject, INJECTOR, Optional, VERSION } from '@angular/core';
import { inject } from '@angular/core/testing';
import { HelloFunction } from './services/hello-function';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  say1: string;
  say2: string;
  say3: string;

  constructor(
    @Inject('arg') private helloService1: HelloFunction,
    @Inject('chi') private helloService2: HelloFunction,
    @Inject('bol') private helloService3: HelloFunction
  ) {
    this.say1 = helloService1.sayHello();
    this.say2 = helloService2.sayHello();
    this.say3 = helloService3.sayHello();
  }
}
