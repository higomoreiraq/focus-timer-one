// DOM
//Document Object Model

// Refatoração: mudar o código para deixá-lo mais entendível
// deixar o código mais perfomático
// SEM ALTERAR suas funcionalidades


// EcmaScript - ES6 Modules : regulamenta o JavaScript de hoje.

//default import
import Controls from "./controls.js"
import Timer from "./timer.js"
import Sound from "./sound.js"
import Events from "./events.js"
//named import
import {
  buttonPlay,
  buttonPause,
  buttonSet,
  buttonStop,
  minutesDisplay,
  secondsDisplay
} from "./elements.js"

const controls = Controls({
  buttonPause,
  buttonPlay,
  buttonSet,
  buttonStop
})

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls: controls.reset
})

const sound = Sound()

Events({controls, timer, sound})
