//Input:  set[] = {3, 34, 4, 12, 5, 2}, sum = 9
//Output:  True  
//There is a subset (4, 5) with sum 9.
/**
 * set  集合
 * len   集合元素个数
 * sum  和
 */
function isSubsetSum(set = [], len, sum) {
    let subset = [];

    // If sum is 0, then answer is true 
    for (let i = 0; i <= len; i++) {
        subset[i] = [];
        subset[i][0] = true;
    }

    // If sum is not 0 and set is empty, then answer is false 
    for (let i = 0; i <= sum; i++) {
        subset[0][i] = false;
    }

    for (let i = 1; i <= len; i++) {
        for (let j = 1; j <= sum; j++) {
            if (j < set[i-1]) {
                subset[i][j] = subset[i-1][j];
            } else {
                subset[i][j] = subset[i-1][j] || subset[i-1][j-set[i-1]];
            }
        }
    }

    let equalSubCount = 0;

    for (let n = 0; n <= len; n++) {
        if (subset[n][sum]) {
            equalSubCount++;
        }
    }

    return equalSubCount > 1;
}


function isSubsetSumRecursive(set = [], len, sum) {
    if (sum === 0) {
        return true;
    }
    if (len === 0 && sum != 0) {
        return false;
    }

    if (set[len-1] > sum) {
        return isSubsetSumRecursive(set, len-1, sum);
    }

    return isSubsetSumRecursive(set, len-1, sum) || isSubsetSumRecursive(set, len-1, sum-set[len-1]);
}

let set = [3, 34, 4, 12, 5, 2], sum = 9;
// let result = isSubsetSum(set, set.length, sum);
let result = isSubsetSumRecursive(set, set.length, sum);

console.log(`result is :`, result);