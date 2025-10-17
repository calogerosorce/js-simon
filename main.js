/*
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e appaiono invece 5 input in cui l'utente deve inserire i numeri che ha visto precedentemente, nell'ordine che preferisce.

Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

NOTA: non è importante l'ordine con cui l'utente inserisce i numeri, basta che ne indovini il più possibile.

BONUS:
Inseriamo la validazione: se l'utente mette due numeri uguali o inserisce cose diverse da numeri lo blocchiamo in qualche modo.
Se l’utente ha inserito qualcosa di non valido, segnaliamolo visivamente nel form.

Tools:
-Const
-Select id
-SetTimeout
  D-none i 5 numeri stampati
  Input
-AddEventListener
-Check number input
*/

const formEl = document.getElementById('form')
const numberEl = document.querySelectorAll('.number_random')
const numbCheckEl = document.querySelectorAll('.number_check')
const textCheckEl = document.querySelectorAll('.text_number')
const btnEl = document.querySelector('button.btn')

let casualNum = []
for (let i = 0; i < numberEl.length; i++) {
    numeriCasuali = Math.floor(Math.random() * 99);
    numberEl[i].textContent = numeriCasuali
    if (!casualNum.includes(numeriCasuali)) {
        casualNum.push(numeriCasuali)

    } else {
        i--;
    }
}



setTimeout(() => {

    for (let i = 0; i < 5; i++) {
        numberEl[i].classList.toggle('d-none')
        numbCheckEl[i].classList.toggle('d-none')
        textCheckEl[i].classList.toggle('d-none')
    }
    btnEl.classList.toggle('d-none')
}, 30000)

let result = []
formEl.addEventListener('submit', (event) => {
    event.preventDefault()
    numb = []
    for (let i = 0; i < numbCheckEl.length; i++) {
        checkNumb = Number(numbCheckEl[i].value)
        numb.push(checkNumb)
        if (casualNum.includes(checkNumb)) {
            result.push(checkNumb)
        }
    }

    console.log(result);


    setTimeout(() => {
        for (let i = 0; i < 5; i++) {
            numbCheckEl[i].classList.toggle('d-none')
            textCheckEl[i].classList.toggle('d-none')
        }
        btnEl.classList.toggle('d-none')
    }, 1000)
})




