import routes from '../routes/routes';
import UrlParser from '../routes/url-parser';
import DrawerInitiator from '../utils/drawer-initiator';
import Hero from './pages/hero';

class App {
  constructor({
    button, drawer, hero, content,
  }) {
    this._button = button;
    this._drawer = drawer;
    this._content = content;
    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      content: this._content,
    });
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    if (url === '/' || url === '/all-restaurant') {
      this.hero();
    } else {
      this.removeHero();
    }
    this._content.innerHTML = await page.render();
    await page.afterRender();
  }

  hero() {
    const hero = document.querySelector('#mainContent');
    if (document.querySelector('#hero')) {
      return;
    }
    hero.insertAdjacentHTML('beforebegin', Hero.render());
  }

  removeHero() {
    const hero = document.querySelector('#hero');
    if (hero) {
      hero.remove();
    }
  }
}

export default App;
