import {
  buttonPlay,
  buttonPause,
  buttonSet,
  buttonStop,
  buttonSoundOn,
  buttonSoundOff
} from "./elements.js"

export default function Events({controls, timer, sound}) {

  // play/pause
  buttonPlay.addEventListener("click", function() {
    controls.play()
    timer.countdown()
    sound.pressButton()
  })

  buttonPause.addEventListener("click", function() {
    controls.pause()
    timer.hold()
    sound.pressButton()
  })

  // stop
  buttonStop.addEventListener("click", function() {
    controls.reset() //declarativa : o que fazer!
    timer.reset()
    sound.pressButton()
  })

  // soundOn/soundOff
  buttonSoundOn.addEventListener("click", function() {
    buttonSoundOn.classList.add("hide")
    buttonSoundOff.classList.remove("hide")
    sound.bgAudio.pause()
  })
  
  buttonSoundOff.addEventListener("click", function() {
    buttonSoundOff.classList.add("hide")
    buttonSoundOn.classList.remove("hide")
    sound.bgAudio.play()
  })

  // adicionar minutos em set
  buttonSet.addEventListener("click", function() {
  
    let newMinutes = controls.getMinutes()
    if (!newMinutes) {
      timer.reset()
      return
    }

    timer.updateDisplay(newMinutes, 0)
    timer.updateMinutes(newMinutes)
  })

  return {

  }
}