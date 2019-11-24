import { Selector } from 'testcafe';
import xPathToCss from 'xpath-to-css';

class BuscarGoogle {

  buscarInput: Selector = Selector("input[name='q']");
  linkMas:     Selector = Selector('span').withText('Más ubicaciones');
  linkWeb:     Selector = Selector(".wLAgVc").nth(4).find('div').withText('SITIO WEB');

    async buscargoogle(t: TestController) {
    await t

      .typeText(this.buscarInput, 'sucursales tottus', { replace: true, paste: true })
      .pressKey("enter")
      .wait(2000)
      .click(this.linkMas)
      .wait(3000)
      .click(this.linkWeb)
      .wait(3000)
    
    }
}
export default new BuscarGoogle();