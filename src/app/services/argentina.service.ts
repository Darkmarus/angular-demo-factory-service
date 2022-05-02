import { HelloFunction } from './hello-function';

export class ArgentinaService implements HelloFunction {
  constructor() {}

  sayHello(): string {
    return 'Argentina Service';
  }
}
