/* 
    En typescript podremos especificar que una variable puede ser de dos o mas tipos, para hacerlo simplemente en la declaracion de la variable separamos los tipos de datos por un simbolo |.
*/

let a: string | number | boolean = 'esto es una cadena';

a = 22;

a = true;