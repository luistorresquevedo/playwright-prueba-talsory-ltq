import { Page } from '@playwright/test';

export class SoatDigitalPage {
  constructor(private page: Page) {}

  // ========== LOCATORS - FORMULARIO INICIAL ==========
  get placaInput() {
    return this.page.getByRole('textbox', { name: 'Ingresa tu placa' });
  }

  get cotizarAhoraBtn() {
    return this.page.getByRole('button', { name: 'COTIZAR AHORA' });
  }

  get radioNoBtn() {
    return this.page.getByRole('radio', { name: 'No' });
  }

  // ========== LOCATORS - SELECCIÓN DE VEHÍCULO ==========
  get tipoVehiculoImg() {
    return this.page.getByRole('img').nth(2);
  }

  get automovilText() {
    return this.page.getByText('AUTOMOVIL');
  }

  get marcaImg() {
    return this.page.getByRole('img').nth(3);
  }

  get marcaInput() {
    return this.page.getByPlaceholder(' ').nth(1);
  }

  get toyotaText() {
    return this.page.getByText('TOYOTA');
  }

  get modeloImg() {
    return this.page.getByRole('img').nth(4);
  }

  get modeloInput() {
    return this.page.getByPlaceholder(' ').nth(2);
  }

  get corollaText() {
    return this.page.getByText('COROLLA', { exact: true });
  }

  get usoVehiculoImg() {
    return this.page.getByRole('img').nth(5);
  }

  get particularText() {
    return this.page.getByText('PARTICULAR');
  }

  // ========== LOCATORS - AÑO Y MES ==========
  get anoInput() {
    return this.page.getByPlaceholder(' ').nth(4);
  }

  get mesInput() {
    return this.page.getByPlaceholder(' ').nth(5);
  }

  // ========== LOCATORS - UBICACIÓN ==========
  get departamentoInput() {
    return this.page.locator('.relative > div > .relative > .is-input').first();
  }

  get limaText() {
    return this.page.getByText('LIMA');
  }

  get provinciaInput() {
    return this.page.locator('div:nth-child(8) > div > .relative > .is-input');
  }

  get limaProvinciaText() {
    return this.page.getByText('LIMA').nth(1);
  }

  get distritoInput() {
    return this.page.locator('div:nth-child(9) > div > .relative > .is-input');
  }

  get puebloLibreText() {
    return this.page.getByText('PUEBLO LIBRE (MAGDALENA VIEJA)');
  }

  // ========== LOCATORS - INFORMACIÓN PERSONAL ==========
  get dniInput() {
    return this.page.getByPlaceholder(' ').nth(1);
  }

  get emailInput() {
    return this.page.locator('input[type="email"]');
  }

  get checkbox() {
    return this.page.getByRole('checkbox');
  }

  get irAPlanesBtn() {
    return this.page.getByRole('button', { name: 'IR A PLANES' });
  }

  // ========== LOCATORS - SELECCIÓN DE PLAN ==========
  get seleccionarPlanBtn() {
    return this.page.getByRole('button', { name: 'Seleccionar plan' }).first();
  }

  get continuarConSOLBtn() {
    return this.page.getByRole('button', { name: 'CONTINUAR CON S/' });
  }

  // ========== LOCATORS - DATOS DE PAGO ==========
  get nombresInput() {
    return this.page.getByPlaceholder(' ').first();
  }

  get apellidoPaterno() {
    return this.page.getByPlaceholder(' ').nth(1);
  }

  get apellidoMaterno() {
    return this.page.getByPlaceholder(' ').nth(2);
  }

  get telefonoInput() {
    return this.page.getByPlaceholder(' ').nth(3);
  }

  get numeroDocumentoInput() {
    return this.page.getByPlaceholder(' ').nth(4);
  }

  get irAPagarBtn() {
    return this.page.getByRole('button', { name: 'IR A PAGAR' });
  }

  // ========== LOCATORS - CONFIRMACIÓN ==========
  get resumenDeCompraText() {
    return this.page.getByText('Resumen de compra:');
  }

  get emailInvalidoError() {
    return this.page.getByText('El Correo electrónico debe ser válido. Verifique y vuelva a intentar.');
  }

  get continuarBtn() {
    return this.page.getByRole('button', { name: 'CONTINUAR' });
  }

  // ========== MÉTODOS - NAVEGACIÓN ==========
  async irAlPrincipio() {
    await this.page.goto('https://test.interseguro.pe/soat-digital/');
  }

  // ========== MÉTODOS - ACCIONES ==========
  async ingresarYSeleccionarPlaca(placa: string) {
    await this.placaInput.click();
    await this.placaInput.fill(placa);
    await this.cotizarAhoraBtn.click();
  }

  async seleccionarVehiculo(marca: string, modelo: string) {
    await this.tipoVehiculoImg.click();
    await this.automovilText.click();
    await this.marcaImg.click();
    await this.marcaInput.fill(marca);
    await this.toyotaText.click();
    await this.modeloImg.click();
    await this.modeloInput.fill(modelo);
    await this.corollaText.click();
    await this.usoVehiculoImg.click();
    await this.particularText.click();
  }

  async ingresarAnoYMes(ano: string, mes: string) {
    await this.anoInput.fill(ano);
    await this.mesInput.fill(mes);
    await this.mesInput.press('Tab');
  }

  async seleccionarUbicacion(departamento: string, provincia: string, distrito: string) {
    await this.departamentoInput.click();
    await this.limaText.click();
    await this.provinciaInput.click();
    await this.limaProvinciaText.click();
    await this.distritoInput.click();
    await this.distritoInput.fill(distrito);
    await this.puebloLibreText.click();
  }

  async ingresarDatosPersonales(dni: string, email: string) {
    await this.dniInput.click();
    await this.dniInput.fill(dni);
    await this.dniInput.press('Tab');
    await this.emailInput.fill(email);
  }

  async ingresarDatosPago(nombre: string, apellidoP: string, apellidoM: string, telefono: string, documento: string) {
    await this.nombresInput.click();
    await this.nombresInput.fill(nombre);
    await this.apellidoPaterno.fill(apellidoP);
    await this.apellidoMaterno.fill(apellidoM);
    await this.telefonoInput.fill(telefono);
    await this.numeroDocumentoInput.click();
    await this.numeroDocumentoInput.fill(documento);
  }

  async tomarPantalla(nombreArchivo: string) {
    await this.page.screenshot({ path: nombreArchivo, fullPage: true });
  }
}
