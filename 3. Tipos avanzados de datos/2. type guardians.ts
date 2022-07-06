/* 
    Los guardianes de tipo son un mecanismo de typescript para validar que tipo de dato es una variable, como las variables pueden ser de dos o mas tipos hacen a nuestro programa incierto, la ventaja de los guardianes de tipo es que hacen la validacion una sola vez, se pueden implementar usando typeof o usando funciones de predicado.
*/

// Ejemplo de funciones de predicado
function isString(param1: string | number): param1 is string {
    return typeof param1 === 'string';
}

function isNumber(param1: string | number): param1 is number {
    return typeof param1 === 'number';
}

function example(param1: string | number) {
    if (isString(param1)) {
        // Si el parametro es un string, entonces en este bloque de codigo(if) el parametro param1 sera tratado como un string.
    } else if (isNumber(param1)) {
        // Si el parametro es un number, entonces en este bloque de codigo(else if) el parametro param1 sera tratado como un number.
    }
}

// En vez de usar funciones predicado podemos usar el operador typeof.
function example2(param1: string | number) {
    if (typeof param1 === 'string') {
        // En este bloque sera tratado como un string si pasa la verificacion.
    } else {
        // En caso contrario sera tratado como un number.
    }
}