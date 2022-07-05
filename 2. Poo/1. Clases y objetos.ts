// Para declarar clases se hace igual que en javascript y para instanciar objetos de la clase se debe especificar que el tipo de dato sera la clase.


// Para definir los atributos se deben declarar primero antes de usarlos en el constructor.

// Los metodos funcionan igual que las funciones, pueden retornar o no un valor, pueden o no recibir parametros, etc..
class Person {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    sayHi(): string {
        return `Hola, me llamo ${this.name}`;
    }
}

const daniel: Person = new Person('Daniel');

console.log(daniel); // Person { name: 'Daniel' }
console.log(daniel.sayHi()); // Hola, me llamo Daniel