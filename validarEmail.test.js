
const validarEmail = require('./validarEmail');

describe('Validación de email', () => {
  test('Verificar email válido', () => {
    const emailValido = 'usuario@example.com';
    expect(validarEmail(emailValido)).toBe(true);
  });

  test('Verificar email inválido', () => {
    const emailInvalido = 'correo@dominio';
    expect(validarEmail(emailInvalido)).toBe(false);
  });
});