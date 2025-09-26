function lola(a,b){
        let a1 = a.toLowerCase();
        let b1 = b.toLowerCase();
         if(a1===b1 && a1.length!==b1.length){
            return false
        }else{
                console.log(a1.length);
            }

       /* let a2= [];
        let b2= [];
        for(let f= 0; f<a1.length;f++){
            a2.push(a1[f]);
        }
        for(let e= 0; e<b1.length;e++){
            b2.push(b1[e]);
        }

        const or1 = a2.sort().join("");
        const or2 = b2.sort().join("");
         
       if(or1===or2){
        return true
       }else{
        return false
       }
       */
}
console.log(lola("rrRoo","Roma"));