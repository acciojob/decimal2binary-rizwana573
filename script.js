function decimalToBinary(num) {
 console.log(Number(num).toString(2));  
}

let num = prompt('please insert decimal number');
window.decimalToBinary = decimalToBinary(num);  
//decimalToBinary(num); 