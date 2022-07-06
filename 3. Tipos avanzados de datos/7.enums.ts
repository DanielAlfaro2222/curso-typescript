/*
    Los enum son un tipo de dato que nos permite agrupar un conjunto de constantes para tenerlas de manera mas organizada en un solo tipo de dato. Los enum almacenan pares clave-valor.

    Los enum solo pueden almacenar valores de tipo number o string.
*/

// Ejemplo #1
enum Dias {
    Lunes = 1,
    Martes = 2,
    Miercoles = 3,
    Jueves = 4,
    Viernes = 5
}

const primerDia: Dias = Dias.Lunes; // 1

// Ejemplo #2
// Si no le asignamos un valor, por defecto el primer elemento empezara en 0, el segundo sera 1, etc...
enum Colores {
    Verde,
    Amarillo,
    Azul,
    Rojo
}

// Ejemplo #3
// Podremos asignarle un valor en el cual los elementos del enum comenzaran, por ejemplo en el siguiente enum, el primer elemento empezara en 20, el segundo sera 21, etc...
enum Lenguajes {
    Python = 20,
    JavaScript,
    Java,
    C,
    Go
}