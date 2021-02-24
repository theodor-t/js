square = value => Math.pow(2, value);

convert = (square, array)  => {
   return array.map(square)
};

let arr = [1, 2, 3];
console.log(convert(square, arr)); 
console.log(arr); 