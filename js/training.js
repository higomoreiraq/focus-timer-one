// DOM
//Document Object Model

// Refatoração: mudar o código para deixá-lo mais entendível
// deixar o código mais perfomático
// SEM ALTERAR suas funcionalidades

const buttonPlay = document.querySelector(".play")
const buttonPause = document.querySelector(".pause")
const buttonSet = document.querySelector(".set")
const buttonStop = document.querySelector(".stop")
const buttonSoundOn = document.querySelector(".sound-on")
const buttonSoundOff = document.querySelector(".sound-off")

const minutesDisplay = document.querySelector(".minutes")
const secondsDisplay = document.querySelector(".seconds")
let minutes = Number(minutesDisplay.textContent)
let timerTimeOut

function resetControls() {
  buttonStop.classList.add("hide")
  buttonPlay.classList.remove("hide")
  buttonPause.classList.add("hide")
  buttonSet.classList.remove("hide")
}

function updateTimerDisplay(minutes, seconds) {
  minutesDisplay.textContent = String(minutes).padStart(2, "0")
  secondsDisplay.textContent = String(seconds).padStart(2, "0")
}

function resetTimer() {
  updateTimerDisplay(minutes, 0)
  clearTimeout(timerTimeOut)
}

function countdown() {
  timerTimeOut = setTimeout(function() {
    let seconds = Number(secondsDisplay.textContent)
    let minutes = Number(minutesDisplay.textContent)

    updateTimerDisplay(minutes, 0)

    if(minutes <= 0) {
      resetControls()
      return
    }

    if(seconds <= 0) {
      seconds = 2
      --minutes
    }

    updateTimerDisplay(minutes, String(seconds - 1))
    countdown()

  }, 1000)
}

buttonPlay.addEventListener("click", function() {
  buttonPlay.classList.add("hide")
  buttonPause.classList.remove("hide")
  buttonSet.classList.add("hide")
  buttonStop.classList.remove("hide")

  countdown()
})

buttonPause.addEventListener("click", function() {
  buttonPause.classList.add("hide")
  buttonPlay.classList.remove("hide")
  clearTimeout(timerTimeOut)
})

buttonStop.addEventListener("click", function() {
  resetControls()
  resetTimer()
})

buttonSoundOn.addEventListener("click", function() {
  buttonSoundOn.classList.add("hide")
  buttonSoundOff.classList.remove("hide")
})

buttonSoundOff.addEventListener("click", function() {
  buttonSoundOff.classList.add("hide")
  buttonSoundOn.classList.remove("hide")
})

buttonSet.addEventListener("click", function() {
  let newMinutes = prompt("Quantos minutos?")
  if(!newMinutes) {
    resetTimer()
    return
  }

  minutes = newMinutes
  updateTimerDisplay(minutes, 0)
})