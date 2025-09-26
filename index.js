let a = 5;
console.log(a);
let b;
let nombre="Alejandro";
//Decalar variable es let o const.
let arr=[];//Arrglo en js ejemplo
arr[0]=2;
arr[1]=3;
arra[2]=5;
arr.push(1234);//espara anadrir;
arr.pop//es para eliminar
console.log(arr)//Es para mostrar
arr.unshift("hola");//Es para poner en la primera posicion en el arr.
let x="1234";
arr.push(+x);//para ponerlo como un int
let last=arr.pop//Lo muestra el primer valor y elimina el ultimo valor.

let v = 658;
let text = `Hola mundo ${v}`;//Concatenacion 
console.log(typeof v);//Mestra el tipo de variavle

let username = { //Objeto

    Name: 'Carlos',
    Apellido: 'Blanco',
    edad: 20,
    24: 20
    
}

console.log(username.Name);
console.log(username["edad"]);
console.log(username[24])

Object.freeze(username)// congela los valore, evita cambiar el contenido de las variavles
//Condicionales
//if{

//}else{

//}

for(let i =0; i<10; i++){
    console.log(i)
}
let aer = [2,2,5]
for(let i of aer){
    console.log(i)
}
/*const l = 1 if(2%2==0)
    if (a == 2) throw */

function hola(){
    console.log("HOla")
}
console.log(sumar(5,7))
function sumar(a,b){
    return a+b;
}

let mat = [[2,3],[4,6],[7,8]]
mat[0][4]
mat[2][1]
console.log(mat[2][1])

function main(){

}
main();

const run = function(){
    console.log(2)
}

run()

const ruu = () =>{
    console.log(2)
}

const suma1 = (a,b) => a+b;
console.log(suma1(5,6));

let le = [1,2,3,4,5]

let pares = []

pares= le.filter((x)=> x %2 ==0);// Filtro{devuelve el #par}

let cuadrado = le.map(x => x*x)
console.log(cuadrado);

le.sort();//ordena
le.reverse();//Revierte el orden

console.log(le.sort((a,b) => a-b))
let suma2 =le.reduce((x,acc) =>  acc + x, 0);//Sumarlos todos 

console.log(suma2)

