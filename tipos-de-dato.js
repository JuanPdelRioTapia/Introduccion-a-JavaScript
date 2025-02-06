// Tipos de datos básicos
console.log(typeof 42);              // 'number'
console.log(typeof 'Veinticinco');   // 'string'
console.log(typeof -666);            // 'number'
console.log(typeof true);            // 'boolean'
console.log(typeof 0);               // 'number'
console.log(typeof '');              // 'string'
console.log(typeof null);            // 'object' 
console.log(typeof undefined);       // 'undefined'
console.log(typeof FALSE);           // 'undefined' (JavaScript es case-sensitive)

// Ejemplos adicionales interesantes
console.log(typeof [1, 2, 3]);       // 'object' (los arrays son objetos)
console.log(typeof {nombre: 'Juan'});// 'object'
console.log(typeof function() {});   // 'function'
console.log(typeof NaN);             // 'number' (aunque sea "Not-A-Number")
console.log(typeof 123n);            // 'bigint' (números enteros grandes)
console.log(typeof Symbol('id'));    // 'symbol'
console.log(typeof (3 + '2'));       // 'string' (coerción de tipos)
console.log(typeof (3 * '2'));       // 'number' (coerción de tipos)
console.log(typeof Math);            // 'object' (objeto incorporado)
console.log(typeof Date.now());      // 'number'

// Casos curiosos
console.log(typeof typeof 42);       // 'string' (el operador typeof siempre devuelve un string)
console.log(typeof notDefinedVar);   // 'undefined' (variable no declarada)
console.log(typeof 0/0);             // 'NaN'