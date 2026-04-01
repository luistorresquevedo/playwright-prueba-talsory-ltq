# Prueba Técnica de Automatización: SOAT Digital

> **Automatización E2E con Playwright, Cucumber y Page Object Model (POM)**

---

## Descripción

Este proyecto es una prueba técnica de automatización para el portal SOAT Digital, implementada con:
- **Playwright** para la automatización de navegadores
- **Cucumber** para pruebas BDD (Gherkin)
- **Page Object Model (POM)** para mantener el código escalable y mantenible
- **Reporte HTML de Cucumber**

## Estructura del Proyecto

```
├── tests/
│   ├── features/
│   │   └── soat-digital.feature         # Escenarios Gherkin con tags
│   ├── step-definitions/
│   │   └── soat-digital.steps.ts        # Step definitions Cucumber
│   ├── pages/
│   │   ├── home.page.ts                 # Page Object Home
│   │   └── SoatDigitalPage.ts           # Page Object SOAT
│   └── utils/
│       └── variable.ts                  # Utilidades (ej: generación de placa)
├── cucumber.json                        # Configuración Cucumber
├── playwright.config.ts                 # Configuración Playwright
├── package.json                         # Dependencias y scripts
└── README.md                            # Este archivo
```

## Instalación

1. Clona el repositorio:
   ```bash
   git clone <url-del-repo>
   cd playwright-prueba-talsory-ltq
   ```
2. Instala dependencias:
   ```bash
   npm install
   ```
3. Instala los navegadores de Playwright (si es necesario):
   ```bash
   npx playwright install
   ```

## Ejecución de Pruebas

- Ejecutar todos los escenarios:
  ```bash
  npm run cucumber
  ```
- Ejecutar por tag (ejemplo):
  ```bash
  npx cucumber-js --tags @compra-exitosa
  ```

## Reporte HTML

Al finalizar la ejecución, se genera un reporte `cucumber-report.html` en la raíz del proyecto.

## Escenarios Automatizados

- **@compra-exitosa**: Resumen de compra exitosa SOAT
- **@soat-economico**: Elegir SOAT más económico
- **@email-invalido**: Validación de email inválido
- **@serie-invalida**: Nº de serie debe ser inválido

## Buenas Prácticas

- Uso de **Page Object Model** para desacoplar lógica de UI y steps
- Steps reutilizables y claros en Gherkin
- Separación de datos y lógica de automatización
- Código limpio y fácil de mantener

## Autor

Luis Torres Quevedo

---

> Proyecto realizado como prueba técnica de automatización E2E
