/// <reference path="../typings/main.d.ts" />

import { MainPage } from './app.po';

describe('main App', function() {
  let page: MainPage;

  beforeEach(() => {
    page = new MainPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo()
    expect(page.getParagraphText()).toEqual('main Works!');
  });
});
