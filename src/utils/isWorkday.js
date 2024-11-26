//Nodo Inicio
export function isWorkday(day){
    //Nodo 1 
    const today = day; 
    switch (today) {
    case "lunes": //Nodo 2
    return true;  //Nodo 3
    case "martes": //Nodo 4
    return true; //Nodo 5
    case "miércoles": //Nodo 6
    return true; //Nodo 7
    case "jueves": //Nodo 8
    return true; //Nodo 9
    case "viernes": //Nodo 10
    return true; //Nodo 11
    case "sábado": //Nodo 12
    return false; //Nodo 13
    case "domingo": //Nodo 14
    return false; //Nodo 15
    default: //Nodo 16
    return false; //Nodo 17
    }
    //Nodo Fin
}