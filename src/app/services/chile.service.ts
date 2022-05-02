import { HelloFunction } from './hello-function';

export class ChileService implements HelloFunction {
  constructor() {}

  sayHello(): string {
    return 'Chile Service';
  }
}
