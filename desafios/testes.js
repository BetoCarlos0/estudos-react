let n = 7

for (let i = 0; i < 30; i++) {
  function clumsy(n, m = n % 4) {
    return n < 3 ? n : n === 3 || n === 4 ? n + 3 : !m ? n + 1 : m === 1 || m === 2 ? n + 2 : n - 1
  }
  console.log(i," ",(i % 4)," " ,clumsy(i))
}
