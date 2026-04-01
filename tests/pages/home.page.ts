import { Page } from '@playwright/test';

export class HomePage {
    constructor(private page: Page) { }
    // ========== LOCATORS - FORMULARIO INICIAL ==========
    get placaInput() {
        return this.page.getByRole('textbox', { name: 'Ingresa tu placa' });
    }

    get cotizarAhoraBtn() {
        return this.page.getByRole('button', { name: 'COTIZAR AHORA' });
    }

    // ========== MÉTODOS - NAVEGACIÓN ==========
    async irAlPrincipio() {
        await this.page.goto('https://test.interseguro.pe/soat-digital/');
        await this.page.waitForLoadState('networkidle');
    }

    // ========== MÉTODOS - ACCIONES ==========
    async ingresarYSeleccionarPlaca(placa: string) {
    await this.placaInput.click();
    await this.placaInput.fill(placa);
    await this.cotizarAhoraBtn.click();
}

}
