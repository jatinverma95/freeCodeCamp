function convertToRoman(num) {

    var romanNos = ["I", "V", "X", "L", "C", "D", "M"];
    var decNos = [1, 5, 10, 50, 100, 500, 1000];

    var numStr = num.toString();

    var numArr = numStr.split('');

    numArr.forEach(function (ele, idx, arr) {
        console.log(idx);
        var tkp = arr.length - idx - 1;
        arr[idx] = {
            num: parseInt(ele) * Math.pow(10, tkp),
            digit: ele
        }
    });

    var decNum = "";

    numArr.forEach(function (ele, idx, arr) {
        var rIdx = decNos.indexOf(ele);
        if (rIdx != -1) {
            decNum += romanNos[rIdx];
        } else {

        }
    });

    console.log(numArr);
}

function convertToRoman2(num) {
    var romanNos = ["I", "IV", "V", "IX", "X", "XL", "L", "XC", "C", "CD", "D", "CM", "M"];
    var decNos = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];

    var romanStr = "";
    for (var i = decNos.length - 1; i >= 0; i--) {
        while (decNos[i] <= num) {
            romanStr += romanNos[i];
            num -= decNos[i];
        }
    }
    console.log(romanStr);
}

convertToRoman2(3966);