import { BlockchainFrontendPage } from './app.po';

describe('blockchain-frontend App', () => {
  let page: BlockchainFrontendPage;

  beforeEach(() => {
    page = new BlockchainFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
