/**
 * Genera una placa aleatoria en formato: abc-123 (3 letras - 3 números)
 * @returns string con formato abc-123
 */
export function generarPlacaAleatoria(): string {
  const abecedario = 'abcdefghijklmnopqrstuvwxyz';
  
  // Generar 3 letras aleatorias
  let letrasParte = '';
  for (let i = 0; i < 3; i++) {
    letrasParte += abecedario.charAt(Math.floor(Math.random() * abecedario.length));
  }
  
  // Generar 3 números aleatorios
  let numerosParte = '';
  for (let i = 0; i < 3; i++) {
    numerosParte += Math.floor(Math.random() * 10).toString();
  }
  
  return `${letrasParte}-${numerosParte}`;
}

/**
 * Genera una cadena alfanumérica aleatoria
 * @param longitud - Longitud total de la cadena (default: 10)
 * @returns string aleatorio alfanumérico
 */
export function generarAlfanumericoAleatorio(longitud: number = 10): string {
  const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let resultado = '';
  
  for (let i = 0; i < longitud; i++) {
    resultado += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
  }
  
  return resultado;
}
