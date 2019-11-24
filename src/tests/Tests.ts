import { ClientFunction, t } from 'testcafe';
import BuscarGoogle from '../page-object/BuscarGoogle';
import HomePage from '../page-object/HomePage';

//Datos de Pruebas
const getLocation = ClientFunction(() => document.location.href);
const url = 'https://www.google.com/';
const sucursal ="sucursales tottus";
const receta ="Rollitos de canella"
  
fixture('Inicia el Test')
.page(url)

.beforeEach( async t => {
  await t 
   .maximizeWindow();
    
})
.afterEach( async t => {

});


test('Caso de pruebas receta tottus', async t => { 
  await t.expect(getLocation()).contains('google.com')
  await BuscarGoogle.buscar(sucursal);
  await t.expect(BuscarGoogle.buscarInput.exists).ok();
  await HomePage.home(receta);
  await t.expect(HomePage.titleText.innerText).eql('No existen recetas para esta categoría');

});


