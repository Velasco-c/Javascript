

let Name = "Carlos Elias";
let apellidos = "Tzoy Velasco"
let years = 20;
let live = "mi casa"
let n1 = 85;
let n2 = 90;
let n3 = 80;
let suma = n1+n2;
let resta = n1-n2;
let division = n1/n2;
let multiplicacion = n1*n2;   
let hours = 24;
let price = 100;
let base = 30;
let height = 20;
let lados = 25
let hobby = "Jugar video juegos"


console.log("Hola, mi nombre es ",Name,", tengo ",years," años y vivo en ", live);
console.log(suma);
console.log(resta);
console.log(division);
console.log(multiplicacion);
console.log("Promedio es ",(n1+n2+n3)/3);
console.log("Los ",years," años a meses son ",years*12," meses");
console.log("El dia tiene ",hours," horas y si fueran minutos seria ",hours*60, " minutos y en segundos serian ",hours*60**2);
console.log("El producto tiene un precio de ",price," y con el iva es ",price*0.19);
console.log("La base es de ",base," y la altura de ",height," y el area es ",(base*height)/2);
console.log("La base es de ",base," y los lados de ",lados," y el area es ",base+lados*2);
console.log("mi nombre completo es ",Name,apellidos);
console.log(Name.length);
console.log("Primera palabra ",Name.slice(0,1)," y la ultima palabra es ",Name.slice(-1));
console.log("El nombre en mayuscula es: ",Name.toUpperCase()," y en minuscula es: ",Name.toLowerCase());
console.log("aqui la frase recortada: ", live.slice(3,8))
console.log(Name.replace("Carlos","apellidos"))
console.log(++n1, "mas incremento ", ++n1, "mas incremento ", ++n1, "mas incremento ", ++n1)
console.log("dos veces la suma entre el numero ",n1," y ",n2," es ", (n1+=n2)*2);
console.log("la resta entre el numero ",n1," y ",n2," es ", n1-=n2);
console.log("la multiplicacion entre el numero ",n1," y ",n2," es ", n1*=n2);
console.log("la resta entre el numero ",n1," y ",n2," es ", n1-=n2);
console.log("mi casa mide ",years," y me llamo",Name);
console.log("el residuo de ",n3," y ",n2 ," es ", n3%n2);
console.log("mi nombre es ",Name, "tengo ",years," años y mi hoobies ",hobby);