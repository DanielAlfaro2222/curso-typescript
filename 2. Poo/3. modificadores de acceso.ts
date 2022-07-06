/* 
    En typescript existen tres tipos de modificadores de acceso:

    1). public: Significa que podran acceder a el desde fuera de la clase.
    2). private: Significa que solo podran acceder a el desde la propia clase.
    3). protected: Significa que solo podran acceder a el las subclases y la propia clase, el resto no.
*/
class Person {
    protected name: string;
    protected age: number;
    private dni: number;

    constructor(name: string, age: number, dni: number) {
        this.name = name;
        this.age = age;
        this.dni = dni;
    }

    get identificacion(): number {
        return this.dni;
    }

    set identificacion(dni: number) {
        this.dni = dni;
    }

    get nombre(): string {
        return this.name;
    }

    set nombre(name: string) {
        this.name = name;
    }

    get edad() {
        return this.age;
    }

    set edad(age: number) {
        this.age = age;
    }
}

const daniel = new Person('Daniel', 21, 12345);