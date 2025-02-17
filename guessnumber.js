console.log("Jeg er i guessnumber")

const lblMessage = document.querySelector(".message")
console.log(lblMessage)
console.log(lblMessage.textContent)

const title = document.querySelector("h1")

const pbAgain = document.querySelector(".btn.again")

const lblNumber = document.querySelector(".number")
console.log(lblNumber)

const pbCheck = document.querySelector(".btn.check")

const lblScore = document.querySelector(".score")
console.log(lblScore)

const inpGuess = document.querySelector(".guess")
console.log(inpGuess)

const lblLastNumber = document.querySelector(".last-number")

let startScore = 20

let secretNumber = 0
console.log(secretNumber)

function generateNumber() {
    secretNumber = Math.trunc(Math.random()*20)+1
    lblNumber.textContent = "?"

}



function lastKnownNumber(guess) {
    lblLastNumber.textContent = guess

}

function endGame(life) {
    if (life === 0) {
        title.textContent = "Du døde lol"
    }
}


function testNumber() {
    console.log("testNumber")
    const guess = inpGuess.value
    console.log(inpGuess.value)
    if (guess === secretNumber) {
        lblMessage.textContent = "Godt gættet!"
        lastKnownNumber(guess)
    } else if (guess < secretNumber || guess > secretNumber){
        lblMessage.textContent = "Forkert Tal"

        startScore --;
        lblScore.textContent = startScore;
    } else {
        lblMessage.textContent = "Indtast et tal mellem 1 - 20"
    }
}

generateNumber()

pbAgain.addEventListener("click", generateNumber)

pbCheck.addEventListener("click", testNumber)

