let n = 10;
const stack = [n];
console.log("🚀 ~ file: testes.js ~ line 3 ~ stack", stack)
let op = '*';

for (let i = n - 1; i > 0; i--) {
    switch (op) {
        case '*':
            stack.push(stack.pop() * i);
            op = '/';
            break;
        case '/':
            stack.push(Math.trunc(stack.pop() / i)); // Math.trunk due to the rounding of negative numbers
            op = '+';
            break;
        case '+':
            stack.push(i);
            op = '-';
            break;
        case '-':
            stack.push(-i);
            op = '*';
            break;
    }
}
console.log(stack.reduce((acc, el) => acc + el, 0))