import { YourAppPage } from './app.po';

describe('your-app App', () => {
  let page: YourAppPage;

  beforeEach(() => {
    page = new YourAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
