import { AppReportsModule } from './app-reports.module';

describe('AppReportsModule', () => {
  let appReportsModule: AppReportsModule;

  beforeEach(() => {
    appReportsModule = new AppReportsModule();
  });

  it('should create an instance', () => {
    expect(appReportsModule).toBeTruthy();
  });
});
