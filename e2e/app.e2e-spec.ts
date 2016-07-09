import { Ng2LottoPage } from './app.po';

describe('ng2-lotto App', function() {
  let page: Ng2LottoPage;

  beforeEach(() => {
    page = new Ng2LottoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
