import { ServicePackage } from '../../src';

describe("Simple package", () => {
  it("Should be create", () => {
    const service = new ServicePackage();
    expect(service).toBeTruthy()
  })
})
