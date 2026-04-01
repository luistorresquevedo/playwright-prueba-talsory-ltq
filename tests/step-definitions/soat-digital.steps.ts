import { Before, After, Given, When, Then } from '@cucumber/cucumber';
import { chromium, Browser, Page, expect, BrowserContext } from '@playwright/test';
import { SoatDigitalPage } from '../pages/SoatDigitalPage';
import { HomePage } from '../pages/home.page';
import { generarPlacaAleatoria } from '../utils/variable';

let browser: Browser;
let context: BrowserContext;
let page: Page;
let homePage: HomePage;
let soatPage: SoatDigitalPage;

Before(async () => {
  browser = await chromium.launch();
  context = await browser.newContext();
  page = await context.newPage();
  homePage = new HomePage(page);
  soatPage = new SoatDigitalPage(page);
});

After(async () => {
  await page.close();
  await context.close();
  await browser.close();
});

Given('que la pagina de SOAT DIGITAL esta abierta', { timeout: 15000 }, async () => {
  await homePage.irAlPrincipio();
});

When('ingreso y selecciono placa aleatoria', async () => {
  await homePage.ingresarYSeleccionarPlaca(generarPlacaAleatoria());
});

When('selecciono vehiculo {string} {string}', async (marca: string, modelo: string) => {
  await soatPage.seleccionarVehiculo(marca, modelo);
});

When('ingreso año y mes {string} {string}', async (ano: string, mes: string) => {
  await soatPage.ingresarAnoYMes(ano, mes);
});

When('selecciono ubicacion {string} {string} {string}', async (departamento: string, provincia: string, distrito: string) => {
  await soatPage.seleccionarUbicacion(departamento, provincia, distrito);
});

When('completo datos personales {string} {string}', async (dni: string, email: string) => {
  await soatPage.ingresarDatosPersonales(dni, email);
});

When('acepto terminos y voy a planes', async () => {
  await soatPage.checkbox.check();
  await soatPage.irAPlanesBtn.click();
});

When('selecciono el primer plan y continuo con SOL', async () => {
  await soatPage.seleccionarPlanBtn.click();
  await soatPage.continuarConSOLBtn.click();
});

When('completo datos de pago {string} {string} {string} {string} {string}', async (nombre: string, apellidoP: string, apellidoM: string, telefono: string, documento: string) => {
  await soatPage.ingresarDatosPago(nombre, apellidoP, apellidoM, telefono, documento);
});

When('voy a pagar', async () => {
  await soatPage.irAPagarBtn.click();
});

Then('veo resumen de compra y URL de pago valida', async () => {
  await expect(soatPage.resumenDeCompraText).toBeVisible();
  await expect(page).toHaveURL('https://test.interseguro.pe/soat-digital/cotizacion/pago');
});

Then('veo mensaje de email invalido', async () => {
  await expect(soatPage.emailInvalidoError).toBeVisible();
});

Then('la URL no debe ser la de pago', async () => {
  await expect(page).not.toHaveURL('https://test.interseguro.pe/soat-digital/cotizacion/pago');
});

Then('tomo captura de pantalla {string}', async (nombreArchivo: string) => {
  await soatPage.tomarPantalla(nombreArchivo);
});
