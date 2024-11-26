//Nodo Inicio
export function isApproved(vnota) {
 //Nodo 1 
  const nota = vnota;
  //Nodo 2 y Nodo 3
  if ((nota<0) || (nota > 10)) {
    return null  //Nodo 4
  } else {
    //Nodo 5
    if (nota <5) {
      return false //Nodo 6 
    } else {
      return true //Nodo 7 
    }
  }
  //Nodo Fin
}