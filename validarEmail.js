function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

const email1 = "usuario@example.com";
const email2 = "correo@dominio";
const email3 = "invalido.com";

console.log(validarEmail(email1)); // true
console.log(validarEmail(email2)); // false
console.log(validarEmail(email3)); // false