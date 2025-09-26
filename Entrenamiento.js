 
  /*  
   function limpiar(palabra) {
  return palabra
    .normalize("NFD")        
    .replace(/\p{M}/gu, "")  
    .toLowerCase()           
    .replace(/[^a-zñ]/g, ""); 
}

function anagrama(a, b) {
  let p1 = limpiar(a);
  let p2 = limpiar(b);


  if (a.length !== b.length) 
    return false;

 
  a = [...a].sort().join("");
  b = [...b].sort().join("");

  return a === b;
}
console.log(anagrama("amor","roma"));
console.log(anagrama("perro","ro"));
console.log(anagrama("amor","roma"));
console.log(anagrama("amor","rama"));
console.log(anagrama("sapo","sopa"));
*/

function anagrama(a, b) {
  let p1 = a.toLowerCase();
  let p2= b.toLowerCase();
    
    
    if (p1.length !== p2.length) {
        return false;
    } else {
       
        // Ordenamos letras y comparamos
 a = [...a].sort().join("");
  b = [...b].sort().join("");

  return a === b;
     
    }  

}
console.log(anagrama("perro","ro"));
console.log(anagrama("amor","roma"));
console.log(anagrama("amor","rama"));
console.log(anagrama("sapo","sopa"));