const maxSubArrayUnOptimized = function (nums) {
    let n = nums.length;
    let maxSum = Number.MIN_VALUE;

    for (let i = 0; i <= n; i++) {
        let cur = 0;
        for (let j = i; j <= n; j++) {
            cur += nums[j]
            if (cur > maxSum) {
                maxSum = cur
            }
        }
        return maxSum
    }
};

//better Solution but doesn't work for all negatives
const maxSubArrayBad = (nums) => {
    let n = nums.length;
    let maxSum = Number.MIN_VALUE;
    let curr = 0;

    if (n === 1) {
        return nums[0]
    }

    for (let i = 0; i <= n; i++) {
        curr += nums[i];

        if (curr > maxSum) maxSum = curr

        if (curr < 0) {
            curr = 0;
        }
    }
    return maxSum
}

//best solution i Found

const maxSubArray = (nums) => {
    let current_maxSum = nums[0], maxSum = nums[0]

    for(let i = 1; i < nums.length; i ++){
        if(current_maxSum < 0) current_maxSum = nums[i]
        else current_maxSum += nums[i]
        maxSum = Math.max(current_maxSum, maxSum)
    }
    return maxSum
}

let a = [-1, -2];

console.log(maxSubArray(a))