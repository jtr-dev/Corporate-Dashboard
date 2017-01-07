import { AniThemeCliPage } from './app.po';

describe('ani-theme-cli App', function() {
  let page: AniThemeCliPage;

  beforeEach(() => {
    page = new AniThemeCliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
