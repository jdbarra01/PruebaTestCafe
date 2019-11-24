import { Selector, t } from 'testcafe';

class BuscarGoogle {

  buscarInput: Selector = Selector("input[name='q']");
  linkMas: Selector = Selector('span');
  linkSitioWeb: Selector = Selector(".wLAgVc").nth(4).find('div');


    async buscar(valor) {
    await t
           .typeText(this.buscarInput, valor, { replace: true, paste: true })
           .pressKey("enter")
           .wait(2000)
           .click(this.linkSitioWeb.withText('SITIO WEB'))
    }
}
export default new BuscarGoogle();