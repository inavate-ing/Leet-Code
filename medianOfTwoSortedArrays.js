//First solution

const findMedianSortedArraysUnoptimized = function (nums1, nums2) {
    let arr = nums1.concat(nums2).sort()
    let len = arr.length

    if (len % 2 === 0) {
        return (arr[len / 2 - 1] + arr[len / 2]) / 2
    }

    return arr[Math.floor(len / 2)]
};

// Better Solution

const findMedianSortedArrays = (nums1, nums2) => {
    let arr = [];
    let totalLength = nums1.length + nums2.length;

    if (totalLength === 1) {
        return nums1.length === 1 ? nums1[0] : nums2[0]
    }

    let arr_len = totalLength % 2 === 0 ? totalLength / 2 + 1 : Math.ceil(totalLength / 2);

    let i = 0, j = 0;

    while (arr.length < arr_len) {
        if (i < nums1.length && j < nums2.length) {
            if (nums1[i] <= nums2[j]) {
                arr.push(nums1[i]);
                i++;
            } else {
                arr.push(nums2[j]);
                j++;
            }
        } else if (i >= nums1.length) {
            arr.push(nums2[j]);
            j++;
        } else {
            arr.push(nums1[i]);
            i++;
        }
    }

    return totalLength % 2 === 0 ? (arr[arr.length-1] + arr[arr.length-2])/2 : arr[arr.length-1];
}

console.log(findMedianSortedArrays([1,2,3,4,10], [5,6,7,8,9]))