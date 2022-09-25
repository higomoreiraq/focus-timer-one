export default function Controls({
  buttonPause,
  buttonPlay,
  buttonSet,
  buttonStop
}) {

  function play() {
    buttonPlay.classList.add("hide")
    buttonPause.classList.remove("hide")
    buttonSet.classList.add("hide")
    buttonStop.classList.remove("hide")
  }

  function pause() {
    buttonPause.classList.add("hide")
    buttonPlay.classList.remove("hide")
  }

// imperativa : como fazer!
  function reset() {
    buttonStop.classList.add("hide")
    buttonSet.classList.remove("hide")
    buttonPlay.classList.remove("hide")
    buttonPause.classList.add("hide")
  }

  function getMinutes() {
    let newMinutes = prompt("Quantos minutos?")
    if(!newMinutes) {
      timer.resetTimer()
      return false
    }

    return newMinutes
  }

return {
  reset,
  play,
  pause,
  getMinutes
}
// default export
}