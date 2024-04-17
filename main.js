// 1 task starts 

// function findNumber (params) {
//     let total = 0

//     for (let i = 1; i <= params; i++) {
//         if (params % i == 0) {
//             total++
//         }
//     }
//     if (total == 2) {
//         return "Tub son"
//     }else{
//         return "Tub son emas "

//     }
    
// }
// console.log(findNumber(11));

// 1 task finished 


// 2 task starts  

// function findRow (params) {
//     let n = 1

//    while (params !== 2) {
//     params /= 2
//     n++
//    }
//    return `2 ni ${n}`

// }

// console.log(findRow(8));

// 2 task finished  

// 3 task starts 

// function  findIdealNumber (params) {
//     let total = 0
    
//     for (let i = 0; i < params; i++) {
//          if (params % i == 0) {
//             total += i
//         }
//     }

//     if (total == params) {
//         return `ideal number`
//     }else{
//         return `ideal number emas `

//     }
// }

// console.log(findIdealNumber(28));

// 3 task finished  

// 4 task starts 
// function findNum (params) {

//     let str = String(params)
//     return `kiritilgan son ${str.length} ga xonalik  `

// }
// console.log(findNum(123456789));



// function findNum (params) {
//     let count = 0

//     while (params !== 0) {
//         params /= 10
//         count++
//         console.log(params);
//     }
//     return count
// }

// console.log(findNum(123));


// 4 task finished 


// 5 task starts 


// function findStrA (params) {
//     let a = 0

//     let arr = Array.from(params)

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] == "a" ||  arr[i] == "A"){
//             a++
//         }
//     }
//     return `kiritilgan so'zda ${a} ta a bor `
// }

// console.log(findStrA("Azamat"));

// 5 task finished 

// 6 task starts 

// function shortestWord(sentence) {
//     const words = sentence.split(' ');
//     let minText = words[0];

//     for (const word of words) {
        
//         if (word.length < minText.length) {
//             minText = word;
//         }
//     }

//     return minText;
// }

// const inputSentence = "kiritilgan sozlar ichidan min sozni topishi kerak ";
// console.log(shortestWord(inputSentence)); 

// 6 task finished  


// 7 task starts 

// function findType (params) {


//     if (typeof(params) == "string") {
//         return `kiritilgan string`
//     }else if (typeof(params) == "number") {
//         return  `kiritilgan number `
//     }else{
//         return `kiritilgan 0`
//     }
    
// }
// console.log(findType(false));


// 7 task finished 

// 8 task starts 
// function reverseString (params) {
//     return params.split('').reverse().join('');
// }

// console.log(reverseString("Aziz"));
// 8 task finished 

// 9 task starts 

// function countDigits(str) {
//     let regex = /\d/g;


//     const matches = str.match(regex);

//     if (matches) {
//         return matches.length;
//     } else {
//         return 0; 
//     }
// }

// const inputString = "Yozilgan 12 ichida 34 ta nomer 56 bor"; 
// console.log(countDigits(inputString)); 
// 9 task finished  

// 10 task starts 

// function reverseNum (params) {

//     const reversedNumber = params.toString().split('').reverse().join('');
//     console.log(reversedNumber);
// }
// reverseNum(7885)

// 10 task finished 

