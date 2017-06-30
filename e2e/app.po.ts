import { browser, by, element } from 'protractor';

export class OpenanPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('openan-root h1')).getText();
  }
}
