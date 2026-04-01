import { test, expect } from '@playwright/test';
import { generarPlacaAleatoria } from './utils/variable';
import { SoatDigitalPage } from './pages/SoatDigitalPage';
import { HomePage } from './pages/home.page';

test('Resumen de compra exitosa SOAT', async ({ page }) => {
  const soatPage = new SoatDigitalPage(page);
  const homePage = new HomePage(page);
  await homePage.irAlPrincipio();
  await homePage.ingresarYSeleccionarPlaca(generarPlacaAleatoria());
  await soatPage.radioNoBtn.check();
  await soatPage.seleccionarVehiculo('TOYO', 'COROLLA');
  await soatPage.ingresarAnoYMes('2018', '4');
  await soatPage.seleccionarUbicacion('LIMA', 'LIMA', 'PUEB');
  await soatPage.continuarBtn.click();
  await soatPage.ingresarDatosPersonales('72654483', 'luistorresquevedo@gmail.com');
  await page.waitForTimeout(5000);
  await soatPage.checkbox.check();
  await soatPage.irAPlanesBtn.click();
  await soatPage.seleccionarPlanBtn.click();
  await soatPage.continuarConSOLBtn.click();
  await soatPage.ingresarDatosPago('LUIS ANGEL', 'TORRES', 'QUEVEDO', '955754630', '123456789AAAA103');
  await soatPage.irAPagarBtn.click();
  await expect(soatPage.resumenDeCompraText).toBeVisible();
  await expect(page).toHaveURL('https://test.interseguro.pe/soat-digital/cotizacion/pago');
  await soatPage.tomarPantalla('resumen_de_compra.png');
});

test('Elegir soat más economico', async ({ page }) => {
  const soatPage = new SoatDigitalPage(page);
  const homePage = new HomePage(page);
  await homePage.irAlPrincipio();
  await homePage.ingresarYSeleccionarPlaca(generarPlacaAleatoria());
  await soatPage.radioNoBtn.check();
  await soatPage.seleccionarVehiculo('TOYO', 'COROLLA');
  await soatPage.ingresarAnoYMes('2018', '4');
  await soatPage.seleccionarUbicacion('LIMA', 'LIMA', 'PUEB');
  await soatPage.continuarBtn.click();
  await soatPage.ingresarDatosPersonales('72654483', 'luistorresquevedo@gmail.com');
  await page.waitForTimeout(5000);
  await soatPage.checkbox.check();
  await soatPage.irAPlanesBtn.click();
  await soatPage.seleccionarPlanBtn.click();
  await soatPage.continuarConSOLBtn.click();
 
});

test('Email invalido', async ({ page }) => {
  const soatPage = new SoatDigitalPage(page);
  const homePage = new HomePage(page);

  await homePage.irAlPrincipio();
  await homePage.ingresarYSeleccionarPlaca(generarPlacaAleatoria());
  await soatPage.radioNoBtn.check();
  await soatPage.seleccionarVehiculo('TOYO', 'COROLLA');
  await soatPage.ingresarAnoYMes('2018', '4');
  await soatPage.seleccionarUbicacion('LIMA', 'LIMA', 'PUEB');
  await soatPage.continuarBtn.click();
  await soatPage.ingresarDatosPersonales('72654483', 'luistorresquevedogmail.com');
  await page.waitForTimeout(5000);
  await soatPage.checkbox.check();
  await soatPage.irAPlanesBtn.click();
  await expect(soatPage.emailInvalidoError).toBeVisible();
});

test('Nº de serie debe ser inválido', async ({ page }) => {
  const soatPage = new SoatDigitalPage(page);
  const homePage = new HomePage(page);

  await homePage.irAlPrincipio();
  await homePage.ingresarYSeleccionarPlaca(generarPlacaAleatoria());
  await soatPage.radioNoBtn.check();
  await soatPage.seleccionarVehiculo('TOYO', 'COROLLA');
  await soatPage.ingresarAnoYMes('2018', '4');
  await soatPage.seleccionarUbicacion('LIMA', 'LIMA', 'PUEB');
  await soatPage.continuarBtn.click();
  await soatPage.ingresarDatosPersonales('72654483', 'luistorresquevedo@gmail.com');
  await page.waitForTimeout(5000);
  await soatPage.checkbox.check();
  await soatPage.irAPlanesBtn.click();
  await soatPage.seleccionarPlanBtn.click();
  await soatPage.continuarConSOLBtn.click();

  await soatPage.ingresarDatosPago('LUIS ANGEL', 'TORRES', 'QUEVEDO', '955754630', '123456789AAAA10');
  await soatPage.irAPagarBtn.click();

  // Pending exact system validation text; assert remains en URL de pago no habilitada
  await expect(page).not.toHaveURL('https://test.interseguro.pe/soat-digital/cotizacion/pago');
});