/* 
    Los intersection types nos permiten combinar dos o mas tipos de datos para crear uno nuevo, el nuevo tipo de dato resultante tendra las propiedas y metodos presentes en cada tipo de dato combinado.
*/

interface Person {
    name: string;
    age: number;
}

interface Dog {
    colmillos: boolean;
}

// Crear nuevo tipo de dato
type Persona = Person & Dog;

let persona: Persona = {
    name: 'Daniel',
    age: 21,
    colmillos: true
}

console.log(persona); // { name: 'Daniel', age: 21, colmillos: true }