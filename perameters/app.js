// ********** REST PERAMETERS ************//

// function add(a,b){
    //     return a+b
    // }
    
    
    // function add (...rest){
        //   let sumNum = 0
        //   for(i=0;i<rest.length;i++){
            //     sumNum += rest[i] 
            //   }
            //   return sumNum
            // }
            // console.log(add(2,5));
            // console.log(add(2,5,3));
            // console.log(add(2,5,3,6));
// ********** DEFAULT PERAMETERS ************//

function sub(a=5,b){
    return a -b 
}

console.log(sub());
console.log(sub(10,5));