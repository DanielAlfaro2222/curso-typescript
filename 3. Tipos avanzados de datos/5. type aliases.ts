/* 
    Un type aliases como su mismo nombre lo indica nos permite crear un alias o sobrenombre a un tipo de dato ya existente, una interseccion de tipos o una union de tipos.
*/

// Ejemplo #1
type aliasNumber = number;

let num: aliasNumber = 22; // Es lo mismo que => num: number = 22.

// Ejemplo #2
type numberOrString = number | string;

let num2: numberOrString = '22';

// Ejemplo #3
interface Car {
    color: string;
    numberWheels: number;
}

interface Bus {
    license: string;
}

type vehicle = Car & Bus;

const sitp: vehicle = {
    color: 'blue',
    numberWheels: 4,
    license: 'ADS3454'
};

// Ejemplo #4
// Tambien sirve para crear un tipo de dato que se recibira en una funcion como un callback, en el siguiente ejemplo creamos el tipo de dato functionString el cual es una funcion que retornara un string, entonces en la funcion example nos aseguramos que el callback que se reciba debe retornar un string.
type functionString = () => string;

function example(callback: functionString): void { }