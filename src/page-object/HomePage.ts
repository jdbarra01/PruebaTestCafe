import { Selector, t } from 'testcafe';

class HomePage {
  //btnRecetas: Selector = Selector('#new_tottus_nav_cliente_recetas');
  btnRecetas: Selector = Selector('#new_tottus_nav_cliente_recetas').find('a');
  btnAlta: Selector = Selector('button').withText('ALTA');
  buscarInput: Selector = Selector('#search');
  titleText: Selector = Selector('#alertEmpty').find('p');

    async home(valor) {
      await t       
            .wait(6000)
            .doubleClick(this.btnRecetas)
            .wait(3000)//Espera 3 segundo que la pagina responda 
            .click(this.btnAlta)
            .typeText(this.buscarInput, valor, { replace: true, paste: true })
   }

   
}
export default new HomePage();