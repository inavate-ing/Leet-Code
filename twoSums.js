// First Solution

const twoSumUnoptimized = function(nums, target) {
    const indexes = [];

    for(let i = 0; i < nums.length; i++){
        for(let j = i + 1; j < nums.length; j++){
            if (nums[i] + nums[j] === target) {
                indexes.push(i);
                indexes.push(j);
            }
        }
    }
    return indexes;
};

// Better Solution

const twoSums = (nums, target) => {
    let map = new Map();

    for (let i = 0; i < nums.length; i++) {
        let num1 = nums[i];
        let num2 = target - num1

        if(map.has(num2)){
            return [i, map.get(num2)]
        }

        map.set(num1, i)
    }
}