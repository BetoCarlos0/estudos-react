let resultado = 'radar'

function checaPalindromo(entrada) {
    let result = '';
    for (let i = 0, j = entrada.length-1; i < entrada.length; i++, j--) {
        result += entrada[j]        
    }
    return (result == entrada) ? true : false;
}

console.log(checaPalindromo('ana'))