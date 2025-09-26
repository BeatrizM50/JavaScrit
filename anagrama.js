function anagrama(a,b){
    const a1 = a.toLowerCase;
    const b1 = b.toLowerCase;

    if(a===b){
        return false;
     }else{
        if(a.length!==b.length){
            return false;
        }else{
        let a2= [];
        let b2= [];
        for(let f=0; f< a1.length;f++){
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
       }
    }
}
    console.log(anagrama("Roma","Roma"))
