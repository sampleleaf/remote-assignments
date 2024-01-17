function max(numbers){
    for(let i = 1; i < numbers.length; i++){
        if(numbers[i] > numbers[0]){
            numbers[0] = numbers[i]
        }
    }
    return numbers[0]
}

console.log(max([5,2,7,1,6]))