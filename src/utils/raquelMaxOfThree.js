export function raquelMaxOfThree(a, b, c) {
    if (a > b && a > c) {
        return a;  // Retorna 'a' si es el mayor
    } else if (b > c) {
        return b;  // Retorna 'b' si es mayor que 'c'
    } else {
        return c;  // Retorna 'c' en cualquier otro caso
    }
}