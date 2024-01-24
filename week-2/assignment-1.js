const numbers = [5,2,7,1,6];
let number = 0;

function max(numbers){
    for(let i = 0; i < numbers.length; i++){
        if(numbers[i] > number){
            number = numbers[i]
        }
    }
    return number
}

console.log(max(numbers))
console.log(numbers)