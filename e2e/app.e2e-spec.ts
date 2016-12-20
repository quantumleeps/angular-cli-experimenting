import { Testing4210Page } from './app.po';

describe('testing4210 App', function() {
  let page: Testing4210Page;

  beforeEach(() => {
    page = new Testing4210Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
