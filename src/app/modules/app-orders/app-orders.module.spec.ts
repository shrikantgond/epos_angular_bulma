import { AppOrdersModule } from './app-orders.module';

describe('AppOrdersModule', () => {
  let appOrdersModule: AppOrdersModule;

  beforeEach(() => {
    appOrdersModule = new AppOrdersModule();
  });

  it('should create an instance', () => {
    expect(appOrdersModule).toBeTruthy();
  });
});
