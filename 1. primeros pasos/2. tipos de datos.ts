// El tipo de dato se debe especificar en la declaracion de las variables
/* let/const/var nombre: tipo = valor */
let nombre: string = 'Daniel';

console.log(nombre);

const PI: number = Math.PI;

console.log(PI);

// Declaracion de un arreglo
// Los arreglos en typescript pueden almacenar x cantidad de elementos y todos deben ser del mismo tipo
let arr: number[] = [1, 2, 3, 4, 5, 6];

console.log(arr);

// Any se usa para especificar que la variable podra almacenar un valor de cualquier tipo, es una mala practica.
let x: any = 5;

// Si en la declaracion de la variable no le especificamos el tipo de dato, por defecto sera any. Estos dos ejemplos hacen lo mismo:
var y;
var y: any;