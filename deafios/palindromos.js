let resultado = 'digital'

function checaPalindromo(entrada){
    return entrada === entrada.split('').reverse().join('') ? "TRUE":'FALSE'
}

console.log(checaPalindromo(resultado));