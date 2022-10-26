let n = 20
let array = []
let count = 0
for (let i = n; i > 0; i--,count++) {
    array.push(i)
    if (count == 0 && i >= 2) array.push('*')
    if (count == 1 && i >= 2) array.push('/')
    if (count == 2 && i >= 2) array.push('+')
    if (count == 3 && i >= 2){
        array.push('-')
        count = -1;
    }
}
let result = array.length

for (let i = 0; i < result; i++) {
    if (array[i] == '*'){
        array.splice(i-1, 3, (array[i-1] * array[i+1]));
    }
}
for (let i = 0; i < result; i++) {
    if (array[i] == '/'){
        console.log("🚀 ~ file: fatorial.js ~ line 23 ~ array", array)
        if (Math.round(array[i-1] / array[i+1]) == (array[i-1] / array[i+1])+0.5){
            array.splice(i-1, 3, (Math.round(array[i-1] / array[i+1]))-1);
        }else{
            array.splice(i-1, 3, (Math.round(array[i-1] / array[i+1])));
        }
        console.log("🚀 ~ file: fatorial.js ~ line 23 ~ array", array)
    }
}
result = array.length
for (let i = 0; i < result; i++) {
    if (array[i] == '+'){
        array.splice(i-1, 3, (array[i-1] + array[i+1]));
    }
    if (array[i] == '-'){
        array.splice(i-1, 3, (array[i-1] - array[i+1]));
        i--
    }
}
console.log("array", array[0])