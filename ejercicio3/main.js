//objetos del ejercicios
//objeto estudiantes
let estudiante = {
    nombre: 'Sergio miranda',
    edad: 25,
    cursos: 'Programacion intensa en campus'
}

// objeto estudiates
let estudiantes = [
    est1 = {
        nombre: 'Andrea López',
        edad: 24,
        cursos: 'Anatomía',
        notas: [78, 85, 92, 88, 91]
    },
    est2 = {
        nombre: 'Miguel Torres',
        edad: 21,
        cursos: 'Programación avanzada',
        notas: [65, 70, 72, 68, 75]
    },
    est3 = {
        nombre: 'Lucía Hernández',
        edad: 19,
        cursos: 'Diseño gráfico',
        notas: [90, 93, 89, 95, 97]
    },
    est4 = {
        nombre: 'Daniel Ramírez',
        edad: 23,
        cursos: 'Base de datos',
        notas: [80, 82, 78, 85, 87]
    },
    est5 = {
        nombre: 'Valeria Castillo',
        edad: 26,
        cursos: 'Redes informáticas',
        notas: [88, 77, 40, 50, 40]
    }
]

// objeto clases
const clases = ['quimica', 'matematicas', 'lenguaje', 'Sociales', 'Sociales'];

// datos de cuenta bancaria
const cuentaBancaria = {
    numeroCuenta: "1234567890",
    titular: "Carlos Tzoy",
    tipoCuenta: "Ahorros",
    saldo: 0,
    moneda: "GTQ",
    banco: "Banco Ejemplo"
};

// objeto de productos
const productos = [
    {
        nombre: "Laptop",
        precio: 4500,
        categoria: "Tecnología"
    },
    {
        nombre: "Mouse",
        precio: 150,
        categoria: "Tecnología"
    },
    {
        nombre: "Camisa",
        precio: 200,
        categoria: "Ropa"
    },
    {
        nombre: "Pantalón",
        precio: 350,
        categoria: "Ropa"
    },
    {
        nombre: "Manzanas",
        precio: 25,
        categoria: "Alimentos"
    }
];
// objeto desestructuracion persona
const persona = {
    nombre: "Carlos Tzoy",
    edad: 25,
    direccion: {
        calle: "Zona 1",
        ciudad: "Mixco",
        pais: "Guatemala"
    }
};

// Arreglo de libros
const libros = [
    {
        titulo: "Cien años de soledad",
        autor: "Gabriel García Márquez",
        estado: "disponible"
    },
    {
        titulo: "Don Quijote de la Mancha",
        autor: "Miguel de Cervantes",
        estado: "prestado"
    },
    {
        titulo: "1984",
        autor: "George Orwell",
        estado: "disponible"
    },
    {
        titulo: "El Principito",
        autor: "Antoine de Saint-Exupéry",
        estado: "prestado"
    },
    {
        titulo: "La Odisea",
        autor: "Homero",
        estado: "disponible"
    }
];



//funciones para ver mensajes desestructurados
function mensaje1() {
    console.log('Mi nombre es ', estudiante.nombre, ' y tengo ', estudiante.edad, ' años y estoy cursando un curso de ', estudiante.cursos)
}
//funciones ver nombre
function mensaje2() {
    let contador = 0;
    for (let estudiantes1 of estudiantes) {
        contador++;
        console.log(contador, ' -- ', estudiantes1.nombre)
    }
}
//Promedio de notas por estudiante
function Promedio() {
    let contador = 0;
    for (let estudiantes1 of estudiantes) {
        contador++;
        let Promedio = 0;
        for (let nota of estudiantes1.notas) {
            Promedio += nota;
        }
        let promedio1 = Promedio / estudiantes1.notas.length;
        console.log(contador, '--', estudiantes1.nombre, ' -- promedio: ', promedio1);
    }
}
// Buscar el estudiante mayor
function mayor_edad() {
    const listaUsuarios = estudiantes;
    listaUsuarios.sort((a, b) => {
        return a.edad - b.edad
    });
    console.log(listaUsuarios)
}

// Filtrar estudiantes aprobados
function aprobados() {
    let contador = 0;
    for (let estudiantes1 of estudiantes) {
        contador++;
        let Promedio = 0;
        for (let nota of estudiantes1.notas) {
            Promedio += nota;
        }
        let promedio1 = Promedio / estudiantes1.notas.length;
        if (promedio1 >= 60) {
            console.log(contador, '--', estudiantes1.nombre, ' -- promedio: ', promedio1, ' usted aprobo');
        } else {
            console.log(contador, '--', estudiantes1.nombre, ' -- promedio: ', promedio1, ' usted reprobo');
        }
    }

};
//Desestructurar dentro de un ciclo
function desestructuracion() {
    for (let estudiantes1 of estudiantes) {
        console.log(estudiantes1.nombre, ' -- ', estudiantes1.edad, ' años')
    }
}
// Arreglo con nombres repetidos
const nombres = [
    "Carlos",
    "Ana",
    "Luis",
    "Carlos",
    "Ana",
    "Pedro",
    "María",
    "Luis"
];



/* comentado para no interferir <----- aqui esta el inicio el comentario 

// Crear un Set de materias
let materias = new Set(clases);
console.log(materias);
// Crear un Map de productos
const producto = new Map();
producto.set('huevo',2);
producto.set('leche',20);
producto.set('pan',1);
producto.set('carne',30);
producto.set('lechuga',10);

//Calcular el total del carrito usando Map
let total = 0;
for (let [llave,valor] of producto){
    console.log(llave, "-", valor)
    total += valor 
}
console.log('el total en todos los productos es: ',total)

//  Verificar existencia en Map
let comparar = prompt('ingrese un producto para verificar si hay en existencia...... ')
for (let [llave,valor] of producto){
    if(comparar.toLowerCase() === llave.toLowerCase()){
        console.log('si existe el producto ',llave)
    }else{
        console.log('no existe el producto ',comparar)
    }
}
Aqui termina el comentaario------------->*/

// Objeto con métodos

function depositar() {
    let monto = Number(prompt('ingresa el monto que quieras depositar.......'));
    cuentaBancaria.saldo += monto
    console.log(cuentaBancaria);
}

function productos_categoria() {
    let opc = Number(prompt(
        `Seleccione una opción: \n 1. Tecnología \n 2. Ropa \n 3. Alimentos`));
    if (opc === 1) {
        for (productos1 of productos) {
            if (productos1.categoria === 'Tecnología') {
                console.log(productos1.nombre, "-", productos1.precio, "-", productos1.categoria);
            }
        }
    }else if (opc === 2) {
        for (productos1 of productos) {
            if (productos1.categoria === 'Ropa') {
                console.log(productos1.nombre, "-", productos1.precio, "-", productos1.categoria);
            }
        }
    }else if (opc === 3) {
        for (productos1 of productos) {
            if (productos1.categoria === 'Alimentos') {
                console.log(productos1.nombre, "-", productos1.precio, "-", productos1.categoria);
            }
        }
    }

}
// Ordenar productos por precio
function Ordenar_price(){
    const ProductosOrdenado = productos;
    ProductosOrdenado.sort((a, b) => {
        return a.precio - b.precio
    });
    console.log(ProductosOrdenado)
}

// Desestructuración
function desestructuracion(){
const { nombre, edad, direccion: { calle, ciudad, pais } } = persona;

// Mostrar datos
console.log("Nombre:", nombre);
console.log("Edad:", edad);
console.log("Calle:", calle);
console.log("Ciudad:", ciudad);
console.log("País:", pais);
}

function eliminar_repetidos(){
const nombresUnicos = new Set(nombres);
console.log("Cantidad de nombres únicos:", nombresUnicos.size);
}

const productosMap = new Map();
for (let producto of productos) {
    productosMap.set(producto.nombre, {
        precio: producto.precio,
        categoria: producto.categoria
    });
}
console.log(productosMap);




function eliminar(){
    console.log(productosMap);
    productosMap.delete("Laptop");
    console.log(productosMap);
}

for (let [clave, valor] of productosMap) {
    console.log("Clave:", clave);
    console.log("Valor:", valor);
}

// Mostrar solo los disponibles
for (let libro of libros) {
    if (libro.estado === "disponible") {
        console.log(libro.titulo, "-", libro.autor, "-", libro.estado);
    }
}
//activacion de funciones
mensaje1();
mensaje2();
Promedio();
mayor_edad();
aprobados();
desestructuracion();
// depositar();
// productos_categoria();
Ordenar_price();
desestructuracion();
eliminar_repetidos();
eliminar();








