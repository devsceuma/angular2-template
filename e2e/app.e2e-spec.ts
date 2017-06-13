import { CeumaPage } from './app.po';

describe('ceuma App', () => {
  let page: CeumaPage;

  beforeEach(() => {
    page = new CeumaPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
