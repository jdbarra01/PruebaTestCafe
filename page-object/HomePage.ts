import { Selector } from 'testcafe';

class HomePage {
   
  btnRecetas:  Selector = Selector('#new_tottus_nav_cliente_recetas').find('a');
  btnAlta:     Selector = Selector('button').withText('ALTA');
  buscarInput: Selector = Selector('#search');
  titleText:   Selector = Selector('#alertEmpty').find('p');

    async homepage(t: TestController) {
    await t
      
      .click(this.btnRecetas)
      .wait(5000)
      .click(this.btnAlta)
      .typeText(this.buscarInput, 'rollitos de canela', { replace: true, paste: true })

    }

}
export default new HomePage();