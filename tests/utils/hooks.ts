import { Before, After, AfterStep } from '@cucumber/cucumber';
// Se ejecuta después de CADA PASO (Given, When, Then).
// Toma un screenshot y lo adjunta al reporte HTML de Cucumber.
AfterStep(async function () {
  const screenshot = await this.page.screenshot();
  await this.attach(screenshot, 'image/png');
});