/* 
    Un type assertions se usa para especificarle al compilador que trate a una variable o un valor como determinado tipo, para hacer esto simplemente se usa la palabra reservada as.
*/

// Ejemplo #1
let a: unknown = 2;
console.log(a);

console.log(a as string + '2'); // 22

// Ejemplo #2
interface Person {
    name: string;
    age: number;
}

const obj = {} as Person;

obj.name = 'Daniel';
obj.age = 21;

console.log(obj);