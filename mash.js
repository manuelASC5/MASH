function MASH(){  
    return  "you will live in a " + getHome()+",and will have "+getChildrenCount()+" kids " 
}
  
let result = MASH(); 
console.log(result)

function getHome(){
    let randomPlace =["Mansion" , "Apartment" , "Shack" , "House"];
    let random = Math.random();
    let randomNumber = random * randomPlace.length;
    randomNumber = Math.floor(randomNumber);
    return randomPlace[randomNumber];
    
};
let result2 = getHome();
console.log(result2);

function getChildrenCount(){
    let x = Math.random();
    let randomchild = x*101;
    randomchild = Math.floor(randomchild);
    return randomchild;
}
let result3= getChildrenCount();
console.log(result3)

