export function fibonacci(num) {
    const fib = [0, 1]
    
    for (let i = 2; i <= num; i++) {
        fib[i] = fib[i - 1] + fib[i - 2] 
    }   
    return fib[num]
} 
      
    fibonacci(1) // -> 1
    fibonacci(3) // -> 2
    fibonacci(10) // -> 55