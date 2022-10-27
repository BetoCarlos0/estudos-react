//let lines = gets().split("\n"); 
let n = 12

// const dp = new Array(n + 1).fill(Infinity); 
// dp[0] = 0;

let arrayCheck = []
let count = -1
let temp = n
let result = []
arrayCheck.push(0)
for (let i = n; i > 0; i--) {
    if (Math.pow(i,2) <= n && arrayCheck.indexOf(i) == -1){
        count++
        result.push(0)
        for (let j = i; j > 0; j--) {
            for (let k = 0; k < n; k++) {
                if (Math.pow(j,2) <= temp){
                    console.log("🚀 ~ file: quadrado.js ~ line 16 ~ j", j)
                    temp -= Math.pow(j,2)
                    console.log("🚀 ~ file: quadrado.js ~ line 18 ~ Math.pow(i,2)", Math.pow(j,2))
                    arrayCheck[count] = i
                    result[count] +=1
                    console.log("🚀 ~ file: quadrado.js ~ line 18 ~ arrayCheck[count]", arrayCheck[count])
                }
            }
        }
        temp = n
    }
}
temp = result[0]
for (let i = 1; i < result.length; i++) {
    if (temp > result[i]){
        temp = result[i]
        console.log(temp)
    }    
}
console.log("🚀 ~ file: quadrado.js ~ line 27 ~ arrayCheck.indexOf(i)", result)



















// let result = 0
// let array = []
// let temp = n
// let count = -1

// for (let i = n; i > 0; i--) {
//     if (Math.pow(i,2) <= n){
//         array.push(0)
//         count++
//         for (let j = i; j > 0; j--) {
//             if (Math.pow(i,2) <= temp){
//             console.log("🚀 ~ file: quadrado.js ~ line 17 ~ j", j)
//             console.log("🚀 ~ file: quadrado.js ~ line 13 ~ i", i)
//                 console.log("🚀 ~ file: quadrado.js ~ line 13 ~ Math.pow(i,2)", Math.pow(i,2))
//                 array[count] += 1
//                 temp -= Math.pow(i,2)
//             }
//         }
//         temp = n
//     }
// }
