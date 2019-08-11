// let input = [1,-4,1,9,-6,7,-3];
// let input = [-1,-4,1,-9,-6,7,-3];
let input = [-1,-4,-1,-9,-6,-7,-3];

function max(left, right) {
    return (left > right) ? left: right;
}

function maxSub(arr, leftIdx, rightIdx) {
    // if arr contains only one item.
    if (leftIdx === rightIdx) {
        return arr[leftIdx];
    }

    // Find middle element of the arr.
    const mid = Math.floor((leftIdx + rightIdx)/2);

    // Find maximum subarray sum for the left subarray
    let leftMax = Number.MIN_SAFE_INTEGER;
    let leftSum = 0;
    let leftMostIdx = 0;
    for (let i = mid; i >= leftIdx; i--) {
        leftSum += arr[i];
        if (leftSum > leftMax) {
            leftMax = leftSum;
            leftMostIdx = i;
        }
    }

    // Find maxium subarray sum for the right subarray
    let rightMax = Number.MIN_SAFE_INTEGER;
    let rightSum = 0;
    let rightMostIdx = 0;
    for (let j = mid + 1; j <= rightIdx; j++) {
        rightSum += arr[j];
        if (rightSum > rightMax) {
            rightMax = rightSum;
            leftMostIdx = j;
        }
    }

    // Recursively find the maxium subarray for both left and right subarrays
    const maxLeftRight = max(maxSub(arr, leftIdx, mid), maxSub(arr, mid + 1, rightIdx));
    return max(maxLeftRight, leftMax + rightMax);
}


const { length } = input;

const maxSubSum = maxSub(input, 0, length - 1);

console.log(`max sum of subarrays is : ${maxSubSum}`);