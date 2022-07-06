/*
    Las clases abstractas son plantillas con contenido ya definido y no definido, podemos definir metodos o propiedades abstract que las clases que hereden de la clase abstracta deberan implementar.
*/

// En este ejemplo la clase Animal define unas propiedades que seran heredades en las subclases y establece un metodo abstracto que cada subclase debera implementar el cuerpo del metodo, este metodo abstracto define la declaracion mas no la implementacion.
abstract class Animal {
    color: string;
    name: string;
    age: number;

    abstract sonido(): void;
}

class Rabbit extends Animal {
    sonido() {
        console.log('Sonido que hace un conejo');
    }
}

class Dog extends Animal {
    sonido() {
        console.log('Sonido que hace un perro');
    }
}

class Cat extends Animal {
    sonido() {
        console.log('Sonido que hace un gato');
    }
}