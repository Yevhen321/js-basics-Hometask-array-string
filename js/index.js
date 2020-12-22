//1. Сумма квадратов массива
/*
let firstArray = [1,2,3,4];
let secondArray = [4,3,2,1];
let sum = 0
function arraySqr (currentValue, index, arr1) {
    arr1 [index] **= 2;
    sum += arr1 [index];
    //thirdArray.push(arr1)
}
firstArray.forEach(arraySqr);
console.log((firstArray))
console.log((sum))
*/
//2. Вывести индексы нулевых элементов массива, а потом удалить нули
/*
let array = [1,0,0,0,1,0];
let arrayForFill= [];
function zeroIndex (arr1) {
    let element = 0;
    let idx = arr1.indexOf(element);
    while (idx !== -1) {
        arrayForFill.push(idx);
        idx = arr1 .indexOf(element, idx + 1);
    }
    return arrayForFill
}
console.log(zeroIndex(array));
const zeroElement = array.filter (element => (element > 0));
console.log (zeroElement);
*/

//3. Самое длинное слово в предложении и его индекс
/*
let str2 = 'Happy birthday mister president happy thanksgiving to you'
function findLongestWord (str){
    let longestWord = str.split(' ').sort((a,b) =>b.length - a.length);
    return longestWord[0];
}
console.log(findLongestWord(str2))
*/

//4. Среднюю длину слова в предложении

let str1 = 'Happy birthday mister president happy thanksgiving to you';
let str2 = 'Html is amazing'
function middleLength(str) {
    let arrayStr = str.split(' ');
    let countWords = 0;
    let sum = 0;
    let res
    for (let i = 0; i < arrayStr.length; i++){
        sum += arrayStr[i].length;
        countWords ++;
        res = sum / countWords
    }
    return res
}
console.log(middleLength(str2))

