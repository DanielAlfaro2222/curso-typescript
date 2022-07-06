/* 
    Se usan para agrupar identificadores (clases, variables, funciones, etc...) bajo un mismo nombre, esto se hace con el fin de que los identificadores de librerias u otros programas colicionen entre si.

    Los identificadores que no lleven la palabra export no podran ser usados por fuera del namespace.
*/

namespace a {
    export class Person {
        protected name: string;

        constructor(name: string) {
            this.name = name;
        }
    }

    export const PI: number = Math.PI;

    export function suma(num1: number, num2: number): number {
        return num1 + num2;
    }
}

const daniel: a.Person = new a.Person('Daniel');