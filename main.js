



const startRange = 2

const endRange = 50

for( let i = startRange ; i <= endRange ; i++ ){
    let isPrime = true;

    for( let j = 2 ; j <= Math.sqrt(i); j++){
        if(i % j == 0){
            isPrime = false;
            break;
        }
        if(isPrime){
            console.log( i +" is a prime number.");
        }
    }
}



let x = -3
let y = 19

if ( x > 0 && y > 0){
console.log("Home");
}else{
console.log("GO home")
}

for( let i = 0 ; i < 5 ; i++){
    console.log(i+ " = i+")
}