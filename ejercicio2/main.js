//primera Funcion determina si un número es positivo, negativo o cero
function numero_p_n() {
    let n = prompt('ingrese un numero')
    n1 = Number(n)
    if (n1 === 0) {
        document.write('el numero ', n1, ' es cero');
        console.log('el numero ', n1, ' es cero');
        document.write('<br>');
    } else if (n1 > 0) {
        document.write('el numero ', n1, ' es positivo');
        console.log('el numero ', n1, ' es positivo');
        document.write('<br>');
    } else {
        document.write('el numero ', n1, ' es negativo');
        console.log('el numero ', n1, ' es negativo');
        document.write('<br>');
    }
}
//segunda Función que determine si un número es par o impar
function numero_pares_impares() {
    let n = prompt('ingrese un numero')
    n1 = Number(n)
    if (n1 % 2 == 0) {
        document.write('el numero ', n1, ' es numero par');
        console.log('el numero ', n1, ' es numero par');
        document.write('<br>');
    } else {
        document.write('el numero ', n1, ' es numero impar');
        console.log('el numero ', n1, ' es numero impar');
        document.write('<br>');
    }
}
//tercera Función que determine si una persona es mayor de edad
function mayor_edad() {
    let n = prompt('ingrese su edad ..... ');
    n1 = Number(n);
    if (n1 >= 18) {
        document.write('Usted tiene ', n1, ' usted es mayor de edad');
        console.log('usted tiene ', n1, ' ustede es mayor de edad');
        document.write('<br>');
    } else {
        document.write('usted tiene ', n1, ' usted es menor de edad');
        console.log('usted tiene ', n1, ' ustede es menor de edad');
        document.write('<br>');
    }
}
//cuarta Funciones  que permita mostrar los números del 1 al 10 con for
function numero_1_a_10() {
    document.write('Ciclo For ');
    console.log('Ciclo For ');
    for (let i = 1; i < 11; i++) {
        document.write(i);
        document.write('<br>');
        console.log(i);
    }
}
//quinta Funcion que permita mostrar los números del 10 al 1 con while
function numero_1_a_10_while() {
    let i = 0
    document.write('Ciclo While');
    console.log('Ciclo While');
    while (i < 11) {
        i++;
        document.write(i);
        document.write('<br>');
        console.log(i);
    }
}
//Sexta Funcion que muestre la tabla de multiplicar de un número
function tabla_de_multiplicar() {
    let n = prompt('ingrese su un numero ..... ');
    n1 = Number(n);
    for (i = 1; i < 11; i++) {
        resultado = n1 * i;
        document.write('la multiplicacion entre el numero', n1, ' y el numero ', i, ' da como resultado: ', resultado);
        document.write('<br>');
        console.log('la multiplicacion entre el numero', n1, ' y el numero ', i, ' da como resultado: ', resultado);
    }
}
//Septima Funcion que Sume los números del 1 al 100 usando un ciclo
function suma_hasta_100() {
    let i = 0;
    let suma = 0;
    console.log('Ciclo While');
    while (i < 100) {
        i += 1
        suma += i
        document.write('la suma del numero ', i, ' da como resultado ', suma);
        document.write('<br>');
        console.log(i);
    }
}
//funcion adicional segun la formula de Gauss -- mas simple sin ciclos eso tilin -___-
function formula_Gauss() {
    let i = 100;
    let resultado = 0;
    resultado = i * (i + 1) / 2
    document.write('la suma de los numero del 1 al 100 es: ', resultado);
    document.write('<br>');
    console.log('la suma de los numero del 1 al 100 es: ', resultado);
}
//Octava Función que reciba dos números y devuelva el mayor
function numero_mayor() {
    let numero1 = prompt('ingrese el primer numero ..... ');
    let numero2 = prompt('ingrese el segundo numero ..... ');
    n1 = Number(numero1);
    n2 = Number(numero2);
    if (n1 > n2) {
        document.write('el numero ', n1, '  es mayor de que ', n2);
        console.log('el numero ', n1, '  es mayor de que ', n2);
        document.write('<br>');
    } else if (n1 < n2) {
        document.write('el numero ', n2, '  es mayor de que ', n1);
        console.log('el numero ', n2, '  es mayor de que ', n1);
        document.write('<br>');
    }
    else {
        console.log('El numero no es valido');
    }
}
//Novena Funcion contar cuántas letras tiene una palabra usando un ciclo
function cantidad_de_letras() {
    let continuar = 's';
    while (continuar === 's') {
        let palabra = prompt('Ingrese una palabra:');
        let contador = 0;
        for (let i = 0; i < palabra.length; i++) {
            contador += 1;
        }
        document.write('La palabra ' + palabra + ' tiene ' + contador + ' letras');
        document.write('<br>');
        console.log('La palabra ' + palabra + ' tiene ' + contador + ' letras');

        continuar = prompt('¿Quieres continuar? s/n').toLowerCase();
    }
}
// decima Funcion  que cuente cuántas vocales tiene una palabra
function vocales_palabra() {
    let palabra_completa = prompt('Ingrese una palabra:').toLocaleLowerCase();
    let contador = 0
    for (let i = 0; i < palabra_completa.length; i++) {
        let palabra = 0
        palabra = palabra_completa[i]
        if (
            palabra === 'a' || palabra === 'e' || palabra === 'i' || palabra === 'o' || palabra === 'u'
        ) {
            contador++;
        }
    }
    document.write('La palabra ' + palabra_completa + ' tiene ' + contador + ' vocales');
    document.write('<br>');
    console.log('La palabra ' + palabra_completa + ' tiene ' + contador + ' vocales');
}
//undécima Función que reciba un número y muestre todos los pares hasta ese número
function numero_pares() {
    let n = prompt('ingrese un numero ....');
    let n1 = Number(n);
    for (let i = 1; i < n1 + 1; i++) {
        if (i % 2 == 0) {
            document.write(i, '<br>');
            console.log(i, '<br>');
        }
    }
};
// duodécima Funcion que calcule el factorial de un número
function numerosFactoriales() {
    let n = prompt('ingrese un numero ....');
    let n1 = Number(n);
    let factorial = 1
    for (let i = 1; i < n1 + 1; i++) {
        factorial *= i
    }
    document.write('el numero factorial de ', n1, ' es ', factorial, '<br>');
    console.log('el numero factorial de ', n1, ' es ', factorial, '<br>');
};
//decimotercera Función que reciba una frase y la imprima carácter por carácter
function caracter() {
    let caracter = prompt('ingrese una frase ....');

    for (let i = 0; i < caracter.length; i++) {
        let letras = caracter[i];
        document.write(letras, '<br>');
        console.log(letras, '<br>');
    }
    document.write('La palabra ', caracter, ' tiene ', caracter.length, ' de letras');
    console.log('La palabra ', caracter, ' tiene ', caracter.length, ' de letras')
};

// decimocuarta Función que invierta una palabra (ej: "hola" → "aloh")
function invertir_palabra() {
    let caracter = prompt('ingrese una  palabra a invertir ....');
    let inverso = "";
    for (let i = palabra.length - 1; i >= 0; i--) {
        inverso += palabra[i];
        document.write(inverso, '<br>');
        console.log(inverso, '<br>');
    }
    document.write(inverso);
    console.log(inverso);
};

//decimaQuinta funcion que determine si una palabra es palíndroma
function palabra_palindroma() {
    let caracter = prompt('ingrese una palabra.... ').toLowerCase();
    let palindromo = ""
    for (let i = caracter.length - 1; i >= 0; i--) {
        let letras = caracter[i];
        palindromo += letras;
    }
    if (palindromo.trim() === caracter.trim()) {
        document.write('la palabra ', caracter, ' es igual a ', palindromo, ' asi que si es una palabra palindroma');
        document.write('<br>');
        console.log('la palabra ', caracter, ' es igual a ', palindromo, ' asi que si es una palabra palindroma');
    } else {
        document.write('la palabra ', caracter, ' no es igual a ', palindromo, ' asi que no es una palabra palindroma');
        document.write('<br>');
        console.log('la palabra ', caracter, ' no es igual a ', palindromo, ' asi que no es una palabra palindroma');
    }
};
//decima sexta que sume solo los números pares del 1 al 50
function suma_numero_pares() {
    let suma = 0
    for (let i = 1; i < 50 + 1; i++) {
        if (i % 2 == 0) {
            suma += i
        }
    }
    document.write('la suma de los numero pares del 1 al 50 da como resultado: ', suma);
    console.log('la suma de los numero pares del 1 al 50 da como resultado: ', suma);
};
// decimaSeptima Función que reciba un número y diga si es primo
function numeros_primos() {
    let n = prompt('Ingrese un número:');
    let n1 = Number(n);
    let esPrimo = true;
    if (n1 < 2) {
        esPrimo = false;
    } else {
        for (let i = 2; i < n1; i++) {
            if (n1 % i === 0) {
                esPrimo = false;
                break;
            }
        }
    }
    if (esPrimo) {
        document.write('El número ', n1, ' es un número primo');
        console.log('El número ', n1, ' es un número primo');
    } else {
        document.write('El número ', n1, ' no es un número primo');
        console.log('El número ', n1, ' no es un número primo');
    }
}
//decimaOctava  Función que muestre un patrón de asteriscos
function asteriscos() {
    let c = prompt('ingresa el numero de asteristicos a agregar');
    let cantidad = Number(c)
    let torre = ''
    for (let i = 0; i < cantidad; i++) {
        torre += '*'
        document.write(torre, '<br>');
        console.log(torre);
    }
}
//decimaNoveno  Función que simule un cajero automático
function cajero() {
    let saldo = 2500;
    document.write(saldo, '<br>')
    let r = prompt('ingrese la cantidad a retirar');
    let retiro = Number(r);
    if (retiro <= saldo || retiro > 0) {
        saldo = saldo - retiro
        console.log('retiro exitoso, el retiro fue de ', retiro, ' tu saldo ahora es de ', saldo);
        document.write('retiro exitoso, el retiro fue de ', retiro, ' tu saldo ahora es de ', saldo)

    } else {
        console.log('saldo insuficiente');
        document.write('saldo insuficiente')
    }
};
//ultima funcion  que simule un login
function login() {
    let usuario = 'admin';
    let contraseña = 'admin';
    let user = prompt('ingrese el nomre de usuario: ').toLowerCase();
    let password = prompt('ingrese el nomre de usuario: ').toLowerCase();

    if (user === usuario || password === contraseña) {
        console.log('Bienvenido ');
        document.write('Bienvenido ');
    } else if (user === usuario || password !== contraseña) {
        document.write('contraseña incorrecta');
        console.log('contraseña incorrecta');
    } else if (user !== usuario || password === contraseña) {
        document.write('usuario incorrecto');
        console.log('usuario incorrecto');
    } else {
        document.write('datos incorrecto');
        console.log('datos incorrecto');
    }
}

function suma_digito() {
    let n1 = prompt('ingrese un numero').trim();
    let suma = 0;
    for (let i = 0; i < n1.length; i++) {
        suma += Number(n1[i]);
    }
    console.log(suma);
}


//inicializacion de funciones
/*numero_p_n();
numero_pares_impares();
mayor_edad();
numero_1_a_10();
numero_1_a_10_while();
tabla_de_multiplicar();
suma_hasta_100();
//funcion adicional
formula_Gauss();
numero_mayor();
cantidad_de_letras();
vocales_palabra();
numero_pares();
numerosFactoriales();
caracter();
invertir_palabra();
palabra_palindroma();
suma_numero_pares();
numeros_primos();
asteriscos();
cajero();
login();
suma_digito();*/
invertir_palabra2();