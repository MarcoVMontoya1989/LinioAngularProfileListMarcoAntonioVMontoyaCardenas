import { GithubProfileListPage } from './app.po';

describe('github-profile-list App', () => {
  let page: GithubProfileListPage;

  beforeEach(() => {
    page = new GithubProfileListPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
