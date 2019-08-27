/**
 * Description:
 * Assumption  table: {1: 'A', 2: 'B', ... , 26: 'Z'}
 * Input: 124
 * Output: ABD, LD
 * */

function genTable() {
    let table = {};
    for(let i = 1; i <= 26; i++) {
        table[i] = String.fromCharCode(65 + i - 1);
    }
    return table;
}

const table = genTable();

function convert(str) {
    let result = [];
    let { length } = str;

    if (length === 1) {
        return [table[str]];
    }

    let lastChar = table[str[length-1]];
    let lastTwoChar = table[str.slice(-2, length)];
    let subConverts = convert(str.slice(0,-1));

    if (length === 2) {
        return lastTwoChar ? [table[str[length-2]] + lastChar, lastTwoChar] : [lastChar + table[str[length-2]]]
    }

    result = subConverts.map(sub => {
        return sub + lastChar;
    });

    if (lastTwoChar) {
        subConverts = convert(str.slice(0,-2));
        result = result.concat(subConverts.map(sub => {
            return sub + lastTwoChar;
        }));
    }
    return result;
}

function preConvert(num) {
    return convert(num.toString());
}

let res = preConvert(123445677);
console.log(table);
console.log(res);