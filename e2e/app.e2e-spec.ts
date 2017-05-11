import { ThemsPage } from './app.po';

describe('thems App', () => {
  let page: ThemsPage;

  beforeEach(() => {
    page = new ThemsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
