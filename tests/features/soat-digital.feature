@soat
Feature: SOAT Digital
  Como usuario del portal SOAT Digital
  Quiero cotizar y comprar un SOAT usando flujo automatizado
  Para validar comportamientos clave del formulario y las reglas de negocio

  Background:
    Given que la pagina de SOAT DIGITAL esta abierta

  @compra-exitosa
  Scenario: Resumen de compra exitosa SOAT
    When ingreso y selecciono placa aleatoria
    And selecciono vehiculo "TOYO" "COROLLA"
    And ingreso año y mes "2018" "4"
    And selecciono ubicacion "LIMA" "LIMA" "PUEB"
    And completo datos personales "72654483" "luistorresquevedo@gmail.com"
    And acepto terminos y voy a planes
    And selecciono el primer plan y continuo con SOL
    And completo datos de pago "LUIS ANGEL" "TORRES" "QUEVEDO" "955754630" "123456789AAAA103"
    And voy a pagar
    Then veo resumen de compra y URL de pago valida
    And tomo captura de pantalla "resumen_de_compra.png"

  @soat-economico
  Scenario: Elegir SOAT más económico
    When ingreso y selecciono placa aleatoria
    And selecciono vehiculo "TOYO" "COROLLA"
    And ingreso año y mes "2018" "4"
    And selecciono ubicacion "LIMA" "LIMA" "PUEB"
    And completo datos personales "72654483" "luistorresquevedo@gmail.com"
    And acepto terminos y voy a planes
    And selecciono el primer plan y continuo con SOL
    # Aquí podrías agregar validaciones específicas si las hay

  @email-invalido
  Scenario: Validación de email inválido
    When ingreso y selecciono placa aleatoria
    And selecciono vehiculo "TOYO" "COROLLA"
    And ingreso año y mes "2018" "4"
    And selecciono ubicacion "LIMA" "LIMA" "PUEB"
    And completo datos personales "72654483" "luistorresquevedogmail.com"
    And acepto terminos y voy a planes
    Then veo mensaje de email invalido

  @serie-invalida
  Scenario: Nº de serie debe ser inválido
    When ingreso y selecciono placa aleatoria
    And selecciono vehiculo "TOYO" "COROLLA"
    And ingreso año y mes "2018" "4"
    And selecciono ubicacion "LIMA" "LIMA" "PUEB"
    And completo datos personales "72654483" "luistorresquevedo@gmail.com"
    And acepto terminos y voy a planes
    And selecciono el primer plan y continuo con SOL
    And completo datos de pago "LUIS ANGEL" "TORRES" "QUEVEDO" "955754630" "123456789AAAA10"
    And voy a pagar
    Then la URL no debe ser la de pago
