// En typescript se pueden declarar las funciones como declaraciones de funcion, funciones anonimas y arrow function. Ademas, las funciones pueden especificar que tipo de dato sera el valor que retornen.

// Declaracion de funcion
function suma(num1: number, num2: number): number {
    return num1 + num2;
}

// Funcion anonima
let suma2 = function (num1: number, num2: number): number {
    return num1 + num2;
}

// Arrow function
let suma3 = (num1: number, num2: number): number => num1 + num2;


console.log(suma(1, 2));
console.log(suma2(5, 5));
console.log(suma3(2, 5));

/* -------------------------------------------------------------------------------------------------- */
// Si no se le especifica el tipo de dato de los argumentos y el valor de retorno, por defecto se les asignara any.
// function resta(num1, num2) {
//     return num1 - num2;
// }

// console.log(typeof resta(4, 2));

/* -------------------------------------------------------------------------------------------------- */
// En typescript todos los argumentos son obligatorios, a menos de que especifiquemos valores opcionales.

// suma(2); Error expected 2 arguments, but got 1.

// Para especificar argumentos opcionales, simplemente colocamos un ? antes de los dos puntos, los parametros opcionales deben ir de ultimas.
function sayHi(name?: string): string {
    return `Hola ${name || 'Daniel'}`;
}

console.log(sayHi()); // Hola Daniel
console.log(sayHi('Sara')); // Hola Sara

/* -------------------------------------------------------------------------------------------------- */
// En typescript nosotros podremos especificar que las funciones no retornen nada, para realizar esto simplemente se le especifica que el valor de retorno sera void, con void solo se podra retornar null o undefined.
function sayMessage(message: string = 'Ola k ase xd'): void {
    console.log(message);
}

sayMessage(); // Ola k ase xd

/* -------------------------------------------------------------------------------------------------- */
// Tambien podremos usar never como el tipo de dato del retorno de la funcion, esto se usa cuando con funciones que nunca terminan, por ejemplo que ocurrio una excepcion en el cuerpo de la funcion o que entro en un bucle infinito.