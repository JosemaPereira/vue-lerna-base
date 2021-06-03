import { SimpleService } from '@sakura-ps/simple-contract';
export class ServicePackage implements SimpleService<string> {
  getValue(): string {
    return 'Hello World'
  }
}