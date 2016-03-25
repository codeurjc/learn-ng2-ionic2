export class MainPage {
  navigateTo() { return browser.get('/'); }
  getParagraphText() { return element(by.css('Main-app p')).getText(); }
}
