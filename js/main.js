var chilometri, eta, costante, costo, sconto;

costante = 0.21;
console.log(costante);
eta = prompt("Inserisci la tua eta'.");
console.log(eta);
chilometri = prompt("Inserisci i chilometri che vuoi percorrere.");
console.log(chilometri);

if (isNaN(eta) || isNaN(chilometri)) {
    alert('I valori inseriti non sono numerici. Prego, inserire esclusivamente valori numerici.');
} else {
    if (eta < 18) {
        costo = chilometri * costante;
        sconto = costo * 0.2;
        costo = costo - sconto;
        costo = Math.round( costo * 100 + Number.EPSILON ) / 100;
        alert("Il costo del biglietto e' " + costo + " Euro.");
        
    } else if (eta > 65) {
        costo = chilometri * costante;
        sconto = costo * 0.4;
        costo = costo - sconto;
        costo = Math.round( costo * 100 + Number.EPSILON ) / 100;
        alert("Il costo del biglietto e' " + costo + " Euro.");
    } else {
        costo = chilometri * costante;
        costo = Math.round( costo * 100 + Number.EPSILON ) / 100;
        alert("Il costo del biglietto e' " + costo + " Euro.");
    }
}