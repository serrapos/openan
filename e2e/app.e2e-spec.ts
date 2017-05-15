import { OpenanPage } from './app.po';

describe('openan App', () => {
  let page: OpenanPage;

  beforeEach(() => {
    page = new OpenanPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
