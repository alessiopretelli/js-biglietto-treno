var chilometri, eta, costante, costo, sconto;

costante = 0.21;
console.log(costante);
eta = prompt("Inserisci la tua eta'.");
console.log(eta);
chilometri = prompt("Inserisci i chilometri che vuoi percorrere.");
console.log(chilometri);

if (eta < 18) {
    costo = chilometri * costante;
    sconto = costo * 0.2;
    costo = costo - sconto;
    alert("Il costo del biglietto e' " + costo + " Euro.");
    
} else if (eta > 65) {
    costo = chilometri * costante;
    sconto = costo * 0.4;
    costo = costo - sconto;
    alert("Il costo del biglietto e' " + costo + " Euro.");
} else {
    costo = chilometri * costante;
    alert("Il costo del biglietto e' " + costo + " Euro.");
}