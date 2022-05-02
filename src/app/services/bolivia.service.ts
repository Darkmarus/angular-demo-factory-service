import { Injectable } from '@angular/core';
import { HelloFunction } from './hello-function';

export class BoliviaService implements HelloFunction {
  constructor() {}

  sayHello(): string {
    return 'Bolivia Service';
  }
}
