function twoSum(nums, target){
    for(let i = 0; i < nums.length; i++){
        for(let j = 0; j < nums.length; j++){
            if(nums[i] !== nums[j]){
                // console.log(nums[i])
                // console.log(`j-${nums[j]}`)
                if((nums[i] + nums[j]) === target){
                    return [i, j]
                }
            }
        }
    }
    return "no element can add up to target"
}

console.log(twoSum([2, 7, 11, 15], 22));