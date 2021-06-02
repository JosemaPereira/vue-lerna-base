
import { SimpleService } from '@sakura-ps/simple-contract';

export class ServicePackage implements SimpleService<String> {
  getValue(): String {
    return "Hello world"
  }
}