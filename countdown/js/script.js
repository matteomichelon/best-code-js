// Simulare un countdown di 10 
// secondi che alla fine dice buon anno
var seconds = 10;

var countdownClock = setInterval(function() {
    // Scrivere il valore di seconds nell'html
    var countdownElement = document.getElementById('countdown');
    countdownElement.innerHTML = seconds

    if( seconds == 0 ) {
        // Se i secondi sono 0, contdown finito, 
        //blocco il setinterval e mostro l'alert
        clearInterval(countdownClock);
        countdownElement.innerHTML = 'Buon Anno!';
    } else {
        // altrimenti decrementare seconds
        seconds--;
    }

}, 1000);
