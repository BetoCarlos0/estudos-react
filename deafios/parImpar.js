let arr = [5, 1, 2, 4, 7, 9]
let check = true
let arrVazio = [];

for (let i = 0; i <arr.length ; i++) {
    console.log("🚀 ~ file: parImpar.js ~ line 5 ~ arr", arr)
    if (arr[i]%2 != 0){
        check = false
        arrVazio.push(arr[i])
    }
    if (arr[i]%2 == 0){
        arrVazio.splice(0,0,arr[i])
    }
    console.log("🚀 ~ file: parImpar.js ~ line 14 ~ arrVazio", arrVazio)
}