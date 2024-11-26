export function raquel(num) {
    if (num > +0) {
        return true;  
    } else if (num < -0) {
        return false; 
    } else if (num == 0) {
        return null;  
    }
}