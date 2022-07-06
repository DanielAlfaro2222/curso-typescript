/* 
    Las interfaces son clases que especifican metodos y atributos que las clases que implementen la interfaz deberan cumplir, las interfaces solo pueden heredar y generar subclases, no podran instanciar objetos.

    En cierta forma las interfaces son esqueletos que deberan cumplir las clases que la implementen.

    Son utiles porque implementando interfaces una clase podra tener hererencia multiple.
*/

// En este ejemplo la interface Ball define que metodos y propiedades deberan cumplir las subclases que la implementen.
interface Ball {
    color: string;
    tamaño: string;
    material: string;
}

class BallFutsal implements Ball {
    color: string;
    tamaño: string;
    material: string;

    constructor(color: string, tamaño: string, material: string) {
        this.color = color;
        this.tamaño = tamaño;
        this.material = material;
    }
}

class BallBeisbol implements Ball {
    color: string;
    tamaño: string;
    material: string;

    constructor(color: string, tamaño: string, material: string) {
        this.color = color;
        this.tamaño = tamaño;
        this.material = material;
    }
}

class BallBasketball implements Ball {
    color: string;
    tamaño: string;
    material: string;

    constructor(color: string, tamaño: string, material: string) {
        this.color = color;
        this.tamaño = tamaño;
        this.material = material;
    }
}