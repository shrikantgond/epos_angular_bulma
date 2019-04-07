import { AppMenusModule } from './app-menus.module';

describe('AppMenusModule', () => {
  let appMenusModule: AppMenusModule;

  beforeEach(() => {
    appMenusModule = new AppMenusModule();
  });

  it('should create an instance', () => {
    expect(appMenusModule).toBeTruthy();
  });
});
