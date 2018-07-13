function MASH(){  
    return  "you will live in a " + getHome()+",and will have "+getChildrenCount()+" kids " +",and you will drive a "+getCar()
}
  
let result = MASH(); 
console.log(result)

function getHome(){
    let randomPlace =["Mansion" , "Apartment" , "Shack" , "House"];
    
    if(process.argv[2]!=undefined){
        randomPlace.push(process.argv[2]);
    }
    randomPlace.push("Streets")
    let random = Math.random();
    let randomNumber = random * randomPlace.length;
    randomNumber = Math.floor(randomNumber);
    return randomPlace[randomNumber];
    
};

function getChildrenCount(){
    let x = Math.random();
    let randomchild = 0 ;
    let heads =Math.random()>.5;
    let inputDefined=process.argv[3]!=undefined;
    if(heads && inputDefined){
        randomchild=process.argv[3];
    }
    else{
        randomchild = x*100;
        randomchild = Math.floor(randomchild);
    }
    return randomchild;
    }

    function getCar(){
    let cars = ["lambo" , "convertible" , "box with wheels", "truck", "Taxi","Van"]
    if(process.argv[4]!=undefined){
        cars.push(process.argv[4]);
    } 
    let randomo = Math.random();
    let randomNumbers = randomo * cars.length;
    randomNumbers = Math.floor(randomNumbers);
    return cars[randomNumbers]
    }

   